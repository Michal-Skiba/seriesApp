import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesSearchComponent } from './series-search/series-search.component';
import { SeriesService } from '../../Services/series.service'
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
} from '@angular/material';

import { TranslateGenrePipe } from '@pipes/translate-genre.pipe';
import { StatusTranslatePipe } from '@pipes/status-translate.pipe';
import { PopulatiryToStringPipe } from '@pipes/populatiry-to-string.pipe';
import { PremiereComponent } from './premiere/premiere.component';
import { ComponentsModule } from 'src/app/Components/components.module';


@NgModule({
  declarations: [
    SeriesSearchComponent,
    TranslateGenrePipe,
    StatusTranslatePipe,
    PopulatiryToStringPipe,
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
    ComponentsModule,
  ],
  providers: [
    SeriesService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SeriesSearchModule { }
