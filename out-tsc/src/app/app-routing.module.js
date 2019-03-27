import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
var routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        loadChildren: './Modules/series-search/series-search.module#SeriesSearchModule',
    },
    {
        path: 'trends',
        loadChildren: './Modules/last-trends/last-trends.module#LastTrendsModule'
    },
    {
        path: 'best-rated',
        loadChildren: './Modules/best-rated-series/best-rated-series.module#BestRatedSeriesModule'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map