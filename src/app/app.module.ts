import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BestRatedSeriesModule } from './best-rated-series/best-rated-series.module';
import { LastTrendsModule } from './last-trends/last-trends.module';
import { SeriesSearchModule } from './series-search/series-search.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '@services/interceptor';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SeriesSearchModule,
    LastTrendsModule,
    BestRatedSeriesModule,
    HttpClientModule,
    CoreModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
