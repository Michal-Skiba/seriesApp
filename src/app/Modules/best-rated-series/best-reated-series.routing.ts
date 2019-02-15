import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestRatedSeriesComponent } from './best-rated-series/best-rated-series.component';

const routes: Routes = [
  { path: '', component: BestRatedSeriesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
