import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BestRatedSeriesModule } from './Modules/best-rated-series/best-rated-series.module';
import { LastTrendsModule } from './Modules/last-trends/last-trends.module';
import { SeriesSearchModule } from './Modules/series-search/series-search.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LatestSeriesComponent } from './Components/latest-series/latest-series.component';
import { TopRatedSerieComponent } from './Components/top-rated-serie/top-rated-serie.component';
import { FooterComponent } from './Components/footer/footer.component';
import { InterceptorService } from './Services/interceptor';
import { CountdownPipe } from './Pipes/countdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LatestSeriesComponent,
    TopRatedSerieComponent,
    FooterComponent,
    CountdownPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    SeriesSearchModule,
    LastTrendsModule,
    BestRatedSeriesModule,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
