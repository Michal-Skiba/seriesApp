import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SeriesService } from '@services/series.service';
var LastTrendsComponent = /** @class */ (function () {
    function LastTrendsComponent(seriesService) {
        this.seriesService = seriesService;
        this.loading = true;
    }
    LastTrendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seriesService.getLastTrends(1).subscribe(function (data) {
            _this.dataSourceTable = data.results;
        }, function () { return null; }, function () {
            _this.loading = false;
        });
    };
    LastTrendsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-last-trends',
            templateUrl: './last-trends.component.html',
            styleUrls: ['./last-trends.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SeriesService])
    ], LastTrendsComponent);
    return LastTrendsComponent;
}());
export { LastTrendsComponent };
//# sourceMappingURL=last-trends.component.js.map