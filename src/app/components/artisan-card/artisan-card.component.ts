import { Component, Input } from '@angular/core';
import { CommonModule }     from '@angular/common';
import { Artisan } from '../../models/artisan.model';
import { HoverCardDirective } from '../../directives/hover-card.directive';

@Component({
  selector: 'app-artisan-card',
  imports: [CommonModule, HoverCardDirective],
  standalone: true,
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})
export class ArtisanCardComponent {
  @Input() artisan!: Artisan;

  // Tableau de 5 étoiles pour le rendu
  stars = Array(5); 

 
  // Pour chaque étoile d’index i (0 à 4), 
  // renvoie 100 si full, fractionnel pour la dernière, 0 sinon 
  
  getStarFill(i: number): number {
    const full = Math.floor(this.artisan.note);
    if (i < full) return 100;
    if (i === full) return Math.round((this.artisan.note - full) * 100);
    return 0;
  }
}