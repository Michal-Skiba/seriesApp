import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BestRatedSeriesModule } from './Modules/best-rated-series/best-rated-series.module';
import { LastTrendsModule } from './Modules/last-trends/last-trends.module';
import { SeriesSearchModule } from './Modules/series-search/series-search.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatMenuModule, MatProgressSpinnerModule, } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './Services/interceptor';
import { ComponentsModule } from './Components/components.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                MatIconModule,
                MatToolbarModule,
                MatMenuModule,
                SeriesSearchModule,
                LastTrendsModule,
                BestRatedSeriesModule,
                HttpClientModule,
                MatProgressSpinnerModule,
                ComponentsModule,
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map