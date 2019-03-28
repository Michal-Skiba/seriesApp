import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LastWeekTrendsComponent } from './last-week-trends/last-week-trends.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import {
  MatIconModule, MatMenuModule,
  MatProgressSpinnerModule, MatToolbarModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LastWeekTrendsComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
  ],
  exports: [
    PageNotFoundComponent,
    LastWeekTrendsComponent,
    FooterComponent,
    MenuComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})

export class CoreModule { }


