import { Routes } from '@angular/router';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { ArtisanByCategoryComponent } from './components/artisan-by-category/artisan-by-category.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'search', component: ResultSearchComponent},
    {path:'category/:category', component: ArtisanByCategoryComponent}
];
