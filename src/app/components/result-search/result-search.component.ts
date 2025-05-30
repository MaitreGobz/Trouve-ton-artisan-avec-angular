import { Component, Input } from '@angular/core';
import { CommonModule }     from '@angular/common';
import { Artisan } from '../../models/artisan.model';
import { ArtisanSearchPipe } from '../../pipes/artisan-search.pipe';
import { ArtisanCardComponent } from '../artisan-card/artisan-card.component';


@Component({
  selector: 'app-result-search',
  imports: [CommonModule, ArtisanCardComponent, ArtisanSearchPipe],
  standalone: true,
  templateUrl: './result-search.component.html',
  styleUrl: './result-search.component.scss'
})
export class ResultSearchComponent {

  // Liste d’artisans à afficher
  
  @Input() artisans: Artisan[] = [];
  @Input() searchTerm = '';
}
