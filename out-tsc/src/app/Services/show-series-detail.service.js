import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var ShowSeriesDetalService = /** @class */ (function () {
    function ShowSeriesDetalService() {
        this.showSeriesDetail = false;
        this.show = new Subject();
    }
    ShowSeriesDetalService.prototype.showUp = function () {
        this.showSeriesDetail = true;
        this.show.next(this.showSeriesDetail);
    };
    ShowSeriesDetalService.prototype.showDown = function () {
        this.showSeriesDetail = false;
        this.show.next(this.showSeriesDetail);
    };
    ShowSeriesDetalService.prototype.getShowInfo = function () {
        return this.show.asObservable();
    };
    ShowSeriesDetalService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ShowSeriesDetalService);
    return ShowSeriesDetalService;
}());
export { ShowSeriesDetalService };
//# sourceMappingURL=show-series-detail.service.js.map