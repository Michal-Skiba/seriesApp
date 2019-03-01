import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LastWeekTrendsComponent } from './last-week-trends/last-week-trends.component';
import { FooterComponent } from './footer/footer.component';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
} from '@angular/material';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LastWeekTrendsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    PageNotFoundComponent,
    LastWeekTrendsComponent,
    FooterComponent,
  ],
})
export class ComponentsModule { }
