import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: './series-search/series-search.module#SeriesSearchModule',
  },
  {
    path: 'trends',
    loadChildren: './last-trends/last-trends.module#LastTrendsModule'
  },
  {
    path: 'best-rated',
    loadChildren: './best-rated-series/best-rated-series.module#BestRatedSeriesModule'
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
