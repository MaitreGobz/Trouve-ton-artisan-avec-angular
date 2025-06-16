import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent implements OnInit, AfterViewInit {

  siteKey = environment.recaptcha.siteKey;

  // Modèle des données du formulaire
  form = {
    user_name:  '',
    user_email: '',
    user_subject: '',
    message:    ''
  };
  recaptchaToken: string | null = null;
  success = false;
  error = ``;

  private recipientEmail?: string;
  private isBrowser: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private artisanService: ArtisanService,
    private route: ActivatedRoute
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Récupération de l'ID dans l'URL et en déduire l'email
    this.route.paramMap.subscribe(params =>{
      const id = Number(params.get('id'));
      this.recipientEmail = this.artisanService.getArtisanById(id)?.email;
    });
  }

  // Chargement du widget reCaptcha sans avoir à actualiser la page
  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    // Si grecaptcha est déjà présent, on peut render tout de suite
    const tryRender = () => {
      const gre = (window as any).grecaptcha;
      if (gre?.render) {
        gre.render('recaptcha-container', {
          sitekey: environment.recaptcha.siteKey,
          callback: (token: string) => {
            this.recaptchaToken = token;
            this.error = '';
          }
        });
      } 
      else {
        // Sinon on réessaie après un court délai
        setTimeout(tryRender, 200);
      }
    };
    tryRender();
  }

  // Vérification de la présence de l'email et de la validité du formulaire et reCaptcha
  onSubmit(contactForm:NgForm): void {
    // Récupération du token reCAPTCHA
    const token = (window as any).grecaptcha?.getResponse();
    if (!token) {
      this.error = 'Veuillez cocher "Je ne suis pas un robot".';
      return;
    }
    // Validité du formulaire
    if (contactForm.invalid) {
      this.error = "Tous les champs sont requis.";
      return;
    }
    if(!this.recipientEmail) {
      this.error = "Impossible de récupérer l'adresse email.";
      return;
    }

    // Paramètres à passer à EmailJS
    const paramEmail = {
      ...this.form,
      to_email: this.recipientEmail,
      'g-recaptcha-reponse' : token
    };

    // Appel d'EmailJS
    emailjs.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateId,
      paramEmail,
      environment.emailJs.userId
    )
    .then(() => {
      // Reset du formulaire et du Captcha
      contactForm.resetForm();
      (window as any).grecaptcha.reset();
      this.recaptchaToken = null;
      this.success = true;
      this.error = '';
    })
    .catch(() => {
      this.error = 'Une erreur est survenue, veuillez réessayer.';
      this.success = false;
    });
  }
}


