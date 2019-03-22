import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: './Modules/series-search/series-search.module#SeriesSearchModule',
  },
  {
    path: 'trends',
    loadChildren: './Modules/last-trends/last-trends.module#LastTrendsModule'
  },
  {
    path: 'best-rated',
    loadChildren: './Modules/best-rated-series/best-rated-series.module#BestRatedSeriesModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
