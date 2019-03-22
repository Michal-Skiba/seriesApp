import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeriesSearchComponent } from './series-search/series-search.component';
import { SerieDetailComponent } from 'src/app/Components/serie-detail/serie-detail.component';


const routes: Routes = [
  {
    path: '',
    component: SeriesSearchComponent,
    children: [
      {
        path: ':id',
        component: SerieDetailComponent,
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);