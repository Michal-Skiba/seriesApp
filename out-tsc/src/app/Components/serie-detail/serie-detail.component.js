import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowSeriesDetalService } from '@services/show-series-detail.service';
import { SeriesService } from '@services/series.service';
import { environment } from '@environments/environment';
var SerieDetailComponent = /** @class */ (function () {
    function SerieDetailComponent(route, showSeriesDetalService, SeriesService) {
        this.route = route;
        this.showSeriesDetalService = showSeriesDetalService;
        this.SeriesService = SeriesService;
        this.loading = true;
        this.similarSeries = [];
        this.similarSeriesLoader = false;
        this.similarSeriesPageNumber = 2;
        this.seasonsEpisodes = {};
        this.actorsError = false;
    }
    SerieDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSeriesDetalService.showUp();
        this.route.paramMap.subscribe(function (param) {
            _this.id = param.get('id');
        });
        this.SeriesService.getSeriesDetail(this.id).subscribe(function (dataSerie) {
            _this.title = dataSerie.name;
            _this.imageFullUrl = environment.posterUrl + dataSerie.backdrop_path;
            _this.seasons = dataSerie.seasons;
        }, function () { return null; }, function () {
            _this.getEpisodesInfo();
            _this.loading = false;
        });
        this.SeriesService.getSimilarSeries(this.id).subscribe(function (data) {
            _this.similarSeries = data.results;
            _this.similarSeriesLastPage = data.total_pages;
        });
        this.SeriesService.getCredits(this.id).subscribe(function (dataCredits) {
            _this.actors = dataCredits.cast;
        }, function () {
            _this.actorsError = true;
        });
    };
    SerieDetailComponent.prototype.getEpisodesInfo = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.SeriesService.getSeasonEpisode(this_1.id, i).subscribe(function (seasonsInfo) {
                _this.seasonsEpisodes[i] = seasonsInfo.episodes;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.seasons.length; i++) {
            _loop_1(i);
        }
    };
    SerieDetailComponent.prototype.loadMore = function () {
        var _this = this;
        this.similarSeriesLoader = true;
        this.SeriesService.getSimilarSeries(this.id, this.similarSeriesPageNumber).subscribe(function (data) {
            var _a;
            (_a = _this.similarSeries).push.apply(_a, data.results);
        }, function () { return null; }, function () {
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
            SeriesService])
    ], SerieDetailComponent);
    return SerieDetailComponent;
}());
export { SerieDetailComponent };
//# sourceMappingURL=serie-detail.component.js.map