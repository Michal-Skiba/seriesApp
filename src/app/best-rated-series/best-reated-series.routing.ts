import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestRatedSeriesComponent } from './best-rated-series/best-rated-series.component';

const routes: Routes = [
  { path: '', component: BestRatedSeriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestRatedSeriesRouting { }
