import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { SeriesService } from '@services/series.service';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';
var MovieTillComponent = /** @class */ (function () {
    function MovieTillComponent(getSeriesService, router) {
        this.getSeriesService = getSeriesService;
        this.router = router;
        this.loading = true;
    }
    MovieTillComponent.prototype.ngOnChanges = function () {
        this.loading = true;
        this.getSeriesInfo(this.id);
    };
    MovieTillComponent.prototype.showDetails = function (id) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.navigate(["/search/" + id]);
    };
    MovieTillComponent.prototype.getSeriesInfo = function (id) {
        var _this = this;
        this.getSeriesService.getSeriesDetail(id).subscribe(function (dataSeries) {
            _this.fullUrl = environment.posterUrl + dataSeries.backdrop_path;
            _this.title = dataSeries.name;
            _this.overview = dataSeries.overview;
        }, function () { return null; }, function () {
            _this.loading = false;
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MovieTillComponent.prototype, "id", void 0);
    MovieTillComponent = tslib_1.__decorate([
        Component({
            selector: 'app-movie-till',
            templateUrl: './movie-till.component.html',
            styleUrls: ['./movie-till.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SeriesService, Router])
    ], MovieTillComponent);
    return MovieTillComponent;
}());
export { MovieTillComponent };
//# sourceMappingURL=movie-till.component.js.map