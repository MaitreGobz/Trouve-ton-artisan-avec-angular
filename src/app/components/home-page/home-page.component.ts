import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopArtisansComponent } from '../top-artisans/top-artisans.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, TopArtisansComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
}
