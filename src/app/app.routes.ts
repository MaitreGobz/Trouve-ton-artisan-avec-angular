import { Routes } from '@angular/router';
import { ResultSearchComponent } from './components/result-search/result-search.component';
import { ArtisanByCategoryComponent } from './components/artisan-by-category/artisan-by-category.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ArtisansPageComponent } from './components/artisans-page/artisans-page.component';
import { DetailsArtisanPageComponent } from './components/details-artisan-page/details-artisan-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LegalNoticesPageComponent } from './components/legal-notices-page/legal-notices-page.component';
import { PersonalDataPageComponent } from './components/personal-data-page/personal-data-page.component';
import { AccessibilityPageComponent } from './components/accessibility-page/accessibility-page.component';
import { CookieManagementPageComponent } from './components/cookie-management-page/cookie-management-page.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'search', component: ResultSearchComponent},
    {path:'category/:category', component: ArtisanByCategoryComponent},
    {path:'artisans', component: ArtisansPageComponent},
    {path:'details/:id/:slug', component: DetailsArtisanPageComponent},
    {path:'legal-notices', component: LegalNoticesPageComponent},
    {path:'personal-data', component: PersonalDataPageComponent},
    {path:'accessibility', component: AccessibilityPageComponent},
    {path:'cookie-management', component: CookieManagementPageComponent},
    {path:'**', component: ErrorPageComponent}
];
