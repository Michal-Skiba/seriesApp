import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastTrendsComponent } from './last-trends/last-trends.component';
import { routing } from './last-trends.routing';
import {
  MatTableModule,
  MatProgressSpinnerModule,
  MatIconModule,
} from '@angular/material';
import { ComponentsModule } from 'src/app/Components/components.module';

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
    ComponentsModule,
  ],
  exports: [
    LastTrendsComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class LastTrendsModule { }
