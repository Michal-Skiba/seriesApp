import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesSearchComponent } from './series-search/series-search.component';
import { GetSeriesService } from '../../Services/get-series.service'
import { routing } from './series-search.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTooltipModule,
  MatExpansionModule,
  MatSlideToggleModule,
} from '@angular/material';
import { MovieTillComponent } from './movie-till/movie-till.component';
import { TableComponent } from '../../Modules/series-search/table/table.component';
import { TillVievComponent } from '../../Modules/series-search/till-viev/till-viev.component';
import { TranslateGenresPipe } from '../../Pipes/translate-genres.pipe';
import { StatusTranslatePipe } from '../../Pipes/status-translate.pipe';
import { PopulatiryToStringPipe } from '../../Pipes/populatiry-to-string.pipe';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { PremiereComponent } from './premiere/premiere.component';

@NgModule({
  declarations: [
    SeriesSearchComponent,
    MovieTillComponent,
    TableComponent,
    TillVievComponent,
    TranslateGenresPipe,
    StatusTranslatePipe,
    PopulatiryToStringPipe,
    SerieDetailComponent,
    PremiereComponent,
  ],
  imports: [
    CommonModule,
    routing,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSlideToggleModule,
  ],
  providers: [
    GetSeriesService,
  ],
})
export class SeriesSearchModule { }
