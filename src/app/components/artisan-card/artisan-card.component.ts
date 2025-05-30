import { Component, Input } from '@angular/core';
import { CommonModule }     from '@angular/common';
import { Artisan } from '../../models/artisan.model';

@Component({
  selector: 'app-artisan-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})
export class ArtisanCardComponent {
  @Input() artisan!: Artisan;

  // Tableau de 5 étoiles pour le rendu
  stars = Array(5); 

  // Pourcentage de remplissage selon la note (0–5)
  get ratingPercent(): number {
    return (this.artisan.note / 5) * 100;
  }
}