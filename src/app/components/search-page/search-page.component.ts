import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { ResultSearchComponent } from '../result-search/result-search.component';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, ResultSearchComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})

export class SearchPageComponent implements OnInit {
  allArtisans: Artisan[] = [];
  searchTerm = '';

  constructor(private route: ActivatedRoute, private artisanService: ArtisanService) {}

  ngOnInit() {
    this.allArtisans = this.artisanService.getAll();
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
    });
  }
}
