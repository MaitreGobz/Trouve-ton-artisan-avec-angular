import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artisan } from '../../models/artisan.model';
import { ArtisanService } from '../../services/artisan.service';
import { TopArtisansPipe } from '../../pipes/top-artisans.pipe';
import { ArtisanCardComponent } from '../artisan-card/artisan-card.component';

@Component({
  selector: 'app-top-artisans',
  standalone: true,
  imports: [CommonModule, TopArtisansPipe, ArtisanCardComponent],
  templateUrl: './top-artisans.component.html',
  styleUrl: './top-artisans.component.scss'
})
export class TopArtisansComponent implements OnInit {
  allArtisans: Artisan[] = [];
  currentIndex = 0;
  isMobile = false;

  constructor(private artisanService: ArtisanService) {}

  ngOnInit(): void {

    // On récupère la liste brute au lancement
    this.allArtisans = this.artisanService.getAll();
    this.checkViewport();
  }

  prev(): void {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  next(): void {
    if (this.currentIndex < 2) this.currentIndex++;
  }

  @HostListener('window:resize')
  checkViewport(): void {
    this.isMobile = window.innerWidth < 768;
}
}
