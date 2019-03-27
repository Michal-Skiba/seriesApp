import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { SeriesService } from '@services/series.service';
var BestRatedTableComponent = /** @class */ (function () {
    function BestRatedTableComponent(seriesService) {
        this.seriesService = seriesService;
        this.loading = true;
    }
    BestRatedTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seriesService.getTopratedSeries(this.tab).subscribe(function (dataSeries) {
            _this.dataSourceTable = dataSeries.results;
        }, function () { return null; }, function () {
            _this.loading = false;
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], BestRatedTableComponent.prototype, "tab", void 0);
    BestRatedTableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-best-rated-table',
            templateUrl: './best-rated-table.component.html',
            styleUrls: ['./best-rated-table.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SeriesService])
    ], BestRatedTableComponent);
    return BestRatedTableComponent;
}());
export { BestRatedTableComponent };
//# sourceMappingURL=best-rated-table.component.js.map