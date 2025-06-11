import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService } from '../../services/artisan.service';
import { Artisan } from '../../models/artisan.model';
import { ArtisanCardComponent } from '../artisan-card/artisan-card.component';

@Component({
  selector: 'app-artisans-page',
  standalone: true,
  imports: [CommonModule, ArtisanCardComponent],
  templateUrl: './artisans-page.component.html',
  styleUrl: './artisans-page.component.scss'
})
export class ArtisansPageComponent {
  artisans: Artisan [] = [];
  
  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {
    this.artisans = this.artisanService.getAll();
  }
}
