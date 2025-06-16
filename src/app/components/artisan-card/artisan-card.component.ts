import { Component, Input } from '@angular/core';
import { CommonModule }     from '@angular/common';
import { Artisan } from '../../models/artisan.model';
import { HoverCardDirective } from '../../directives/hover-card.directive';
import { RouterLink } from '@angular/router';
import { StarRankComponent } from "../star-rank/star-rank.component";

@Component({
  selector: 'app-artisan-card',
  imports: [CommonModule, HoverCardDirective, RouterLink, StarRankComponent],
  standalone: true,
  templateUrl: './artisan-card.component.html',
  styleUrl: './artisan-card.component.scss'
})
export class ArtisanCardComponent {
  @Input() artisan!: Artisan;

  // Méthode 'slugify' pour transformer le text en une 'slug' simple
  slugify(name: string): string {
    return name

      //Convertit tous les caractères en minuscules.
      .toLowerCase()  
    
      // Enlève les accents
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

      // Enlève la ponctuation
      .replace(/[^\w\s-]/g, '')

      // Remplace les espaces par des tirets
      .trim()
      .replace(/\s+/g, '-');
  }
}