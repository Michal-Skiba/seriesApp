import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GetSeriesService } from '@services/get-series.service';
import { environment } from '@environments/environment';
var MovieTillComponent = /** @class */ (function () {
    function MovieTillComponent(getSeriesService) {
        this.getSeriesService = getSeriesService;
        this.loading = true;
        this.similarSeriesDisplay = false;
        this.seasonsEpisodes = {};
        this.actorsError = false;
        this.showDetailsFlag = new EventEmitter();
    }
    MovieTillComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSeriesService.getSimilarSeries(this.id).subscribe(function (series) {
            _this.similarSeries = series.results;
            _this.similarSeriesDisplay = true;
        }, function (error) {
            console.log(error, 'similar');
        });
        this.getSeriesService.getCredits(this.id).subscribe(function (dataCredits) {
            _this.actors = dataCredits.cast;
        }, function (error) {
            console.log(error, 'getseiresservice credis');
            _this.actorsError = true;
        });
    };
    MovieTillComponent.prototype.ngOnChanges = function () {
        this.loading = true;
        this.getSeriesInfo(this.id);
    };
    MovieTillComponent.prototype.getEpisodesInfo = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.getSeriesService.getSeasonEpisode(this_1.id, i).subscribe(function (seasonsInfo) {
                _this.seasonsEpisodes[i] = seasonsInfo.episodes;
            }, function (error) { return console.log(error, 'getSeasonEpisod', error.status); });
        };
        var this_1 = this;
        for (var i = 1; i < this.seasons.length + 1; i++) {
            _loop_1(i);
        }
    };
    MovieTillComponent.prototype.showDetails = function () {
        this.showDetailsFlag.emit(true);
    };
    MovieTillComponent.prototype.getSeriesInfo = function (id) {
        var _this = this;
        this.getSeriesService.getSeriesDetail(id).subscribe(function (dataSeries) {
            _this.fullUrl = environment.posterUrl + dataSeries.backdrop_path;
            _this.title = dataSeries.name;
            _this.seasons = dataSeries.seasons;
        }, function (error) { return console.log(error, 'seriesss'); }, function () {
            _this.getEpisodesInfo();
            _this.loading = false;
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MovieTillComponent.prototype, "id", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MovieTillComponent.prototype, "tillViev", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], MovieTillComponent.prototype, "showDetailsFlag", void 0);
    MovieTillComponent = tslib_1.__decorate([
        Component({
            selector: 'app-movie-till',
            templateUrl: './movie-till.component.html',
            styleUrls: ['./movie-till.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [GetSeriesService])
    ], MovieTillComponent);
    return MovieTillComponent;
}());
export { MovieTillComponent };
//# sourceMappingURL=movie-till.component.js.map