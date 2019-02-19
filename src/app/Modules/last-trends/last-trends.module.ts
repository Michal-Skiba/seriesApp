import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastTrendsComponent } from './last-trends/last-trends.component';
import { routing } from './last-trends.routing';
import {
  MatTableModule,
  MatProgressSpinnerModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  declarations: [
    LastTrendsComponent
  ],
  imports: [
    CommonModule,
    routing,
    MatTableModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  exports: [
    LastTrendsComponent,
  ]
})
export class LastTrendsModule { }
