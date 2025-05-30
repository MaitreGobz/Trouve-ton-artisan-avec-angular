import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../models/artisan.model';

@Pipe({
  name: 'artisanSearch',
  standalone: true,
})
export class ArtisanSearchPipe implements PipeTransform {

  transform(artisans: Artisan[] = [], search: string = ''): Artisan[] {
    
    // Normaliser la saisie pour une recherche insensible à la casse et aux espaces.
    const s = search.trim().toLocaleLowerCase();

    if (!s) {
      return artisans;
    }
    return artisans.filter(a=>
      a.name.toLocaleLowerCase().includes(s) ||
      a.specialty.toLocaleLowerCase().includes(s) ||
      a.location.toLocaleLowerCase().includes(s)
    );
  }
}
