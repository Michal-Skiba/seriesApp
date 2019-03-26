import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BestRatedSeriesComponent } from './best-rated-series/best-rated-series.component';
var routes = [
    { path: '', component: BestRatedSeriesComponent }
];
var BestRatedSeriesRouting = /** @class */ (function () {
    function BestRatedSeriesRouting() {
    }
    BestRatedSeriesRouting = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], BestRatedSeriesRouting);
    return BestRatedSeriesRouting;
}());
export { BestRatedSeriesRouting };
//# sourceMappingURL=best-reated-series.routing.js.map