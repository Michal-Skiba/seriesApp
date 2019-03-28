import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { CountdownDirective } from './shared/countdown.directive';
import { MovieTileComponent } from './movie-tile/movie-tile.component';
import { TillViewComponent } from './till-view/till-view.component';
import { SerieInformationsComponent } from './serie-informations/serie-informations.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { PopularityToStringPipe } from './shared/populatiry-to-string.pipe';

@NgModule({
  declarations: [
    TableViewComponent,
    ViewWrapperComponent,
    CountdownDirective,
    MovieTileComponent,
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
    TableViewComponent,
    ViewWrapperComponent,
    CountdownDirective,
    MovieTileComponent,
    TillViewComponent,
    SerieInformationsComponent,
    SerieDetailComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})


export class ViewControllerModule { }
