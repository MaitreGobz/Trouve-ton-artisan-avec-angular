import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { ArtisanSearchPipe } from '../../pipes/artisan-search.pipe';
import { ArtisanCardComponent } from '../artisan-card/artisan-card.component';

@Component({
  selector: 'app-result-search',
  standalone: true,
  imports: [
    CommonModule,
    ArtisanSearchPipe,
    ArtisanCardComponent
  ],
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {
  allArtisans: Artisan[] = [];
  searchTerm = '';

  constructor(
    private route: ActivatedRoute,
    private artisanService: ArtisanService
  ) {}

  ngOnInit(): void {
    // Charger la liste complète d’artisans
    this.allArtisans = this.artisanService.getAll();

    // Sur chaque changement de queryParams, extraire “q” et mettre à jour searchTerm
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q']?.trim() || '';
    });
  }
}

