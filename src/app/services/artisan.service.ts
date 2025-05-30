import { Injectable } from '@angular/core';
import artisanData    from '../data/datas.json';
import { Artisan } from '../models/artisan.model';

@Injectable({ providedIn: 'root' })
export class ArtisanService {

  // Retourne la liste complète des artisans
  getAll(): Artisan[] {
    return artisanData;
  }
}