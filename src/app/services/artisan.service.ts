import { Injectable } from '@angular/core';
import artisanData    from '../data/datas.json';
import { Artisan } from '../models/artisan.model';

@Injectable({ providedIn: 'root' })
export class ArtisanService {
  private artisans: Artisan[] = artisanData;

  // Retourne la liste complète des artisans
  getAll(): Artisan[] {
    return this.artisans;
  }

  // Retourne les artisans par 'id'
  getArtisanById(id:number): Artisan | undefined{
    return this.artisans.find(a => a.id === id);
  }
}