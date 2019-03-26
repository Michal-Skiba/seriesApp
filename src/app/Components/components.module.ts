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
import { TableViewComponent } from './table-view/table-view.component';
import { ViewWrapperComponent } from './view-wrapper/view-wrapper.component';
import { CountdownDirective } from '../directives/countdown.directive';
import { MovieTillComponent } from './movie-till/movie-till.component';
import { TillViewComponent } from './till-view/till-view.component';
import { SerieInformationsComponent } from './serie-informations/serie-informations.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { PopularityToStringPipe } from '@pipes/populatiry-to-string.pipe';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LastWeekTrendsComponent,
    FooterComponent,
    TableViewComponent,
    ViewWrapperComponent,
    CountdownDirective,
    MovieTillComponent,
    TillViewComponent,
    SerieInformationsComponent,
    SerieDetailComponent,
    PopularityToStringPipe,
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
    TableViewComponent,
    ViewWrapperComponent,
    CountdownDirective,
    MovieTillComponent,
    TillViewComponent,
    SerieInformationsComponent,
    SerieDetailComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ComponentsModule { }
