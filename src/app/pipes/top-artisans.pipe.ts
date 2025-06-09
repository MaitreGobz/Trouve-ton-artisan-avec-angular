import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../models/artisan.model';

@Pipe({
  name: 'topArtisans',
  standalone: true
})
export class TopArtisansPipe implements PipeTransform {

  transform(artisans: Artisan[] = [], count: number = 3): Artisan[] {
    return artisans
      // clone pour ne pas muter l'original
      .slice() 
      .sort((a, b) => b.note - a.note)
      .slice(0, count);
  }
}
