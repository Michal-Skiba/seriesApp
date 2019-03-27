import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowSeriesDetalService } from '@services/show-series-detail.service';
import { GetSeriesService } from '@services/get-series.service';
import { environment } from '@environments/environment';
var SerieDetailComponent = /** @class */ (function () {
    function SerieDetailComponent(route, showSeriesDetalService, getSeriesService) {
        this.route = route;
        this.showSeriesDetalService = showSeriesDetalService;
        this.getSeriesService = getSeriesService;
        this.loading = true;
        this.similarSeries = [];
        this.similarSeriesLoader = false;
        this.similarSeriesPageNumber = 2;
    }
    SerieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSeriesDetalService.showUp();
        this.route.paramMap.subscribe(function (param) {
            _this.id = param.get('id');
        });
        this.getSeriesService.getSeriesDetail(this.id).subscribe(function (dataSerie) {
            _this.title = dataSerie.name;
            _this.imageFullUrl = environment.posterUrl + dataSerie.backdrop_path;
        }, function (error) { return console.log(error); }, function () {
            _this.loading = false;
        });
        this.getSeriesService.getSimilarSeries(this.id).subscribe(function (data) {
            _this.similarSeries = data.results;
            _this.similarSeriesLastPage = data.total_pages;
        });
    };
    SerieDetailComponent.prototype.loadMore = function () {
        var _this = this;
        this.similarSeriesLoader = true;
        this.getSeriesService.getSimilarSeries(this.id).subscribe(function (data) {
            var _a;
            (_a = _this.similarSeries).push.apply(_a, data.results);
        }, function (error) { return console.log(error); }, function () {
            _this.similarSeriesLoader = false;
        });
        this.similarSeriesPageNumber += 1;
    };
    SerieDetailComponent.prototype.reload = function () {
        location.reload();
    };
    SerieDetailComponent.prototype.ngOnDestroy = function () {
        this.showSeriesDetalService.showDown();
    };
    SerieDetailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-serie-detail',
            templateUrl: './serie-detail.component.html',
            styleUrls: ['./serie-detail.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            ShowSeriesDetalService,
            GetSeriesService])
    ], SerieDetailComponent);
    return SerieDetailComponent;
}());
export { SerieDetailComponent };
//# sourceMappingURL=serie-detail.component.js.map