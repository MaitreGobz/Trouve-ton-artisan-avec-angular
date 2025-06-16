import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArtisanService } from '../../services/artisan.service';
import { StarRankComponent } from '../star-rank/star-rank.component';
import { Artisan } from '../../models/artisan.model';
import { ContactFormComponent } from '../contact-form/contact-form.component';


@Component({
  selector: 'app-details-artisan-page',
  standalone: true,
  imports: [CommonModule, RouterModule, StarRankComponent, ContactFormComponent],
  templateUrl: './details-artisan-page.component.html',
  styleUrl: './details-artisan-page.component.scss'
})
export class DetailsArtisanPageComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private artisanService = inject(ArtisanService);

  artisanId!: number;
  artisan: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      const id = params.get('id');
      if(id) {
        this.artisanId = +id;
        this.artisan = this.artisanService.getArtisanById(this.artisanId);
      }
    });
  }
}
