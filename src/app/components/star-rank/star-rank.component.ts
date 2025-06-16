import { Component , Input } from '@angular/core';
import { CommonModule }     from '@angular/common';


@Component({
  selector: 'app-star-rank',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rank.component.html',
  styleUrl: './star-rank.component.scss'
})
export class StarRankComponent {
  @Input() note = 0;
  
  // Tableau de 5 étoiles pour le rendu
  stars = Array(5); 

 
  // Pour chaque étoile d’index i (0 à 4), 
  // renvoie 100 si full, fractionnel pour la dernière, 0 sinon 
  
  getStarFill(i: number): number {
    const full = Math.floor(this.note);
    if (i < full) return 100;
    if (i === full) return Math.round((this.note - full) * 100);
    return 0;
  }
}
