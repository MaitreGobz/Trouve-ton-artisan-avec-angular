import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Artisan } from '../../models/artisan.model';
import { ArtisanCardComponent } from '../artisan-card/artisan-card.component';
import { ArtisanService } from '../../services/artisan.service';


@Component({
  selector: 'app-artisan-by-category',
  standalone: true,
  imports: [ CommonModule, ArtisanCardComponent],
  templateUrl: './artisan-by-category.component.html',
  styleUrl: './artisan-by-category.component.scss'
})
export class ArtisanByCategoryComponent {

  allArtisans: Artisan[] = [];
  filteredArtisans: Artisan[] = [];

  // On garde le nom brut pour l'affichage
  rawCategoryName = '';

  constructor(private route:ActivatedRoute, private artisanService: ArtisanService) {}

  ngOnInit(): void {
    // Charger la liste complète d’artisans
    this.allArtisans = this.artisanService.getAll();

    // À chaque changement de paramètre `category`, on met à jour :
    //    - rawCategoryName : nom tel quel
    //    - filteredArtisans : filtrage case-insensible basé sur artisan.category
    this.route.paramMap.subscribe(params => {
      const categoryParam = params.get('category') || '';
      this.rawCategoryName = categoryParam;
      
      // Filtre en fonction du champ `artisan.category` en miniscule
      const catParamLowerCase = categoryParam.trim().toLowerCase();
      this.filteredArtisans = this.allArtisans.filter(a =>
        a.category?.toLowerCase() === catParamLowerCase
      );
    });
  }
}
