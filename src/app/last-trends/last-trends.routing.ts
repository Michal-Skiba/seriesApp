import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LastTrendsComponent } from './last-trends/last-trends.component';

const routes: Routes = [
  { path: '', component: LastTrendsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
