import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LastWeekTrendsComponent } from './last-week-trends/last-week-trends.component';
import { FooterComponent } from './footer/footer.component';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTooltipModule,
  MatCardModule,
  MatExpansionModule,
  MatSlideToggleModule,
} from '@angular/material';
import { TableVievComponent } from './table-viev/table-viev.component';
import { VievWrapperComponent } from './viev-wrapper/viev-wrapper.component';
import { CountdownDirective } from '../directives/countdown.directive';
import { MovieTillComponent } from './movie-till/movie-till.component';
import { TillVievComponent } from './till-viev/till-viev.component';
import { SerieInformationsComponent } from './serie-informations/serie-informations.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LastWeekTrendsComponent,
    FooterComponent,
    TableVievComponent,
    VievWrapperComponent,
    CountdownDirective,
    MovieTillComponent,
    TillVievComponent,
    SerieInformationsComponent,
    SerieDetailComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTooltipModule,
    MatCardModule,
    MatExpansionModule,
    RouterModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  exports: [
    PageNotFoundComponent,
    LastWeekTrendsComponent,
    FooterComponent,
    TableVievComponent,
    VievWrapperComponent,
    CountdownDirective,
    MovieTillComponent,
    TillVievComponent,
    SerieInformationsComponent,
    SerieDetailComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ComponentsModule { }
