import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SeriesService } from '@services/series.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowSeriesDetalService } from '@services/show-series-detail.service';
import { environment } from '@environments/environment.ts';
var SeriesSearchComponent = /** @class */ (function () {
    function SeriesSearchComponent(seriesService, router, showSeriesDetalService) {
        this.seriesService = seriesService;
        this.router = router;
        this.showSeriesDetalService = showSeriesDetalService;
        this.loadingSeries = false;
        this.showPremiere = true;
        this.showSearchedItems = true;
        this.searchSeriesTitle = '';
        this.dataSourceTable = [];
    }
    Object.defineProperty(SeriesSearchComponent.prototype, "warningCondition", {
        get: function () {
            return !this.showPremiere && this.dataSourceTable.length <= 0 && this.searchSeriesTitle.length > 3 && !this.loadingSeries;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesSearchComponent.prototype, "errorCondition", {
        get: function () {
            return !this.isSerieDetailThere && !this.showPremiere && !this.loadingSeries && this.dataSourceTable.length <= 0 && (this.searchSeriesTitle.length <= 3 || !this.searchSeriesTitle);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SeriesSearchComponent.prototype, "vievCondition", {
        get: function () {
            return !this.loadingSeries && this.dataSourceTable.length > 0 && this.dataSourceTable.length <= 39 && this.showSearchedItems && !this.showPremiere;
        },
        enumerable: true,
        configurable: true
    });
    SeriesSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showSeriesDetalService.getShowInfo().subscribe(function (data) {
            _this.isSerieDetailThere = data;
            setTimeout(function () {
                if (data) {
                    _this.showPremiere = false;
                }
            }, 0);
        });
        this.searchForm = new FormGroup({
            seriesTitle: new FormControl()
        });
    };
    SeriesSearchComponent.prototype.inputListener = function (event) {
        this.inputValue = event.target.value;
        if (!event.target.value) {
            this.isSerieDetailThere = false;
            this.changeRoute('search');
            this.showPremiere = true;
        }
    };
    SeriesSearchComponent.prototype.changeRoute = function (data) {
        this.router.navigate([data]);
    };
    SeriesSearchComponent.prototype.showDetails = function ($event) {
        if ($event === true) {
            this.showSearchedItems = false;
        }
    };
    SeriesSearchComponent.prototype.searchSeries = function (searchData) {
        var _this = this;
        if (this.searchSeriesTitle.length > 3) {
            for (var i = 1; i <= searchData.total_pages; i++) {
                this.seriesService.searchSeries(this.searchSeriesTitle, i).subscribe(function (dataSeries) {
                    _this.dataSourceTable = _this.dataSourceTable.concat(dataSeries.results.filter(function (data) { return data.popularity > environment.popularity; }));
                }, function () { return null; }, function () {
                    _this.loadingSeries = false;
                });
            }
        }
        else {
            this.loadingSeries = false;
        }
    };
    SeriesSearchComponent.prototype.resetValues = function () {
        this.dataSourceTable = [];
        this.showPremiere = false;
        this.showSearchedItems = true;
    };
    SeriesSearchComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.router.url != '/search') {
            this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return true;
            };
            this.router.navigate(["/search"]);
        }
        this.loadingSeries = true;
        this.resetValues();
        this.searchSeriesTitle = this.inputValue;
        this.seriesService.searchSeries(this.searchSeriesTitle, 1).subscribe(function (dataSeries) {
            _this.searchSeries(dataSeries);
        }, function () { return null; });
        if (!this.searchSeriesTitle) {
            this.loadingSeries = false;
        }
    };
    SeriesSearchComponent = tslib_1.__decorate([
        Component({
            selector: 'app-series-search',
            templateUrl: './series-search.component.html',
            styleUrls: ['./series-search.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SeriesService,
            Router,
            ShowSeriesDetalService])
    ], SeriesSearchComponent);
    return SeriesSearchComponent;
}());
export { SeriesSearchComponent };
//# sourceMappingURL=series-search.component.js.map