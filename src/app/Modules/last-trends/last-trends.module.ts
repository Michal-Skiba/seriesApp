import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastTrendsComponent } from './last-trends/last-trends.component';
import { routing } from './last-trends.routing';

@NgModule({
  declarations: [
    LastTrendsComponent
  ],
  imports: [
    CommonModule,
    routing,
  ],
  exports: [
    LastTrendsComponent,
  ]
})
export class LastTrendsModule { }
