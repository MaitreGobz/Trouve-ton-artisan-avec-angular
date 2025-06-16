import { Routes } from '@angular/router';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { ArtisanByCategoryComponent } from './components/artisan-by-category/artisan-by-category.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ArtisansPageComponent } from './components/artisans-page/artisans-page.component';
import { DetailsArtisanPageComponent } from './components/details-artisan-page/details-artisan-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'search', component: ResultSearchComponent},
    {path:'category/:category', component: ArtisanByCategoryComponent},
    {path:'artisans', component: ArtisansPageComponent},
    {path:'details/:id/:slug', component: DetailsArtisanPageComponent},
    {path:'**', component: ErrorPageComponent}
];
