import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SeriesService } from '@services/series.service';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';
var LastWeekTrendsComponent = /** @class */ (function () {
    function LastWeekTrendsComponent(getSeriesService, router) {
        this.getSeriesService = getSeriesService;
        this.router = router;
        this.lastWeekTrends$ = this.getSeriesService.getLastWeekTrends();
        this.posterUrl = environment.posterUrl;
    }
    LastWeekTrendsComponent.prototype.showInfo = function (id) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.navigate(["/search/" + id]);
    };
    LastWeekTrendsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-last-week-trends',
            templateUrl: './last-week-trends.component.html',
            styleUrls: ['./last-week-trends.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SeriesService, Router])
    ], LastWeekTrendsComponent);
    return LastWeekTrendsComponent;
}());
export { LastWeekTrendsComponent };
//# sourceMappingURL=last-week-trends.component.js.map