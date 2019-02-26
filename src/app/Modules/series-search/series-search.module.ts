import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesSearchComponent } from './series-search/series-search.component';
import { GetSeriesService } from '../../Services/get-series.service'
import { routing } from './serie-search.routing';
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
import { TranslateGenrePipe } from '../../Pipes/translate-genre.pipe';
import { StatusTranslatePipe } from '../../Pipes/status-translate.pipe';
import { PopulatiryToStringPipe } from '../../Pipes/populatiry-to-string.pipe';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { PremiereComponent } from './premiere/premiere.component';
import { SerieInformationsComponent } from './serie-informations/serie-informations.component';

@NgModule({
  declarations: [
    SeriesSearchComponent,
    MovieTillComponent,
    TableComponent,
    TillVievComponent,
    TranslateGenrePipe,
    StatusTranslatePipe,
    PopulatiryToStringPipe,
    SerieDetailComponent,
    PremiereComponent,
    SerieInformationsComponent,
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
