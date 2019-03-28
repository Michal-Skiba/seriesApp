import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesSearchComponent } from './series-search/series-search.component';
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

import { PremiereComponent } from './premiere/premiere.component';
import { ViewControllerModule } from '../view-controller/view-controller.module';
import { ShowSeriesDetailService } from './shared/show-series-detail.service';

@NgModule({
  declarations: [
    SeriesSearchComponent,
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
    ViewControllerModule,
  ],
  providers: [
    ShowSeriesDetailService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SeriesSearchModule { }
