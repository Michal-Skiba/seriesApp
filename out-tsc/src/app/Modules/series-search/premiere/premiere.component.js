import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { slideInLeft, slideInRight } from 'ng-animate';
import * as moment from 'moment';
import { environment } from '@environments/environment';
import { SeriesService } from '@services/series.service';
var PremiereComponent = /** @class */ (function () {
    function PremiereComponent(seriesService) {
        this.seriesService = seriesService;
        this.isOpen = 'nothing';
        this.date = moment().format('YYYY-MM-DD');
        this.series = [];
        this.loading = true;
        this.url = environment.posterUrl;
    }
    PremiereComponent.prototype.ngOnInit = function () {
        this.getPremieres();
    };
    PremiereComponent.prototype.dayLater = function () {
        var _this = this;
        this.loading = true;
        this.date = moment(this.date).add("days", 1).format('YYYY-MM-DD');
        this.getPremieres();
        this.isOpen = 'right';
        setTimeout(function () {
            _this.isOpen = 'nothing';
        }, 900);
    };
    PremiereComponent.prototype.dayBefore = function () {
        var _this = this;
        this.loading = true;
        this.date = moment(this.date).subtract("days", 1).format('YYYY-MM-DD');
        this.getPremieres();
        this.isOpen = 'left';
        setTimeout(function () {
            _this.isOpen = 'nothing';
        }, 900);
    };
    PremiereComponent.prototype.getPremieres = function () {
        var _this = this;
        this.series = [];
        this.loading = true;
        var numberOfPages;
        this.seriesService.getPremieres(this.date, 1).subscribe(function (data) {
            numberOfPages = data.total_pages;
            for (var i = 0; data.results.length - 1 >= i; i++) {
                _this.series.push(data.results[i]);
            }
        }, function () { return null; }, function () {
            if (numberOfPages > 1) {
                for (var i = 2; numberOfPages <= 1; i++) {
                    _this.seriesService.getPremieres(_this.date, i).subscribe(function (data) {
                        for (var i_1 = 0; data.results.length - 1 >= i_1; i_1++) {
                            _this.series.push(data.results[i_1]);
                        }
                    }), function () { return null; },
                        function () {
                            _this.loading = false;
                        };
                }
            }
            else {
                _this.loading = false;
            }
        });
    };
    PremiereComponent = tslib_1.__decorate([
        Component({
            selector: 'app-premiere',
            templateUrl: './premiere.component.html',
            styleUrls: ['./premiere.component.scss'],
            animations: [
                trigger('openClose', [
                    transition('nothing => right', [
                        useAnimation(slideInRight)
                    ]),
                    transition('nothing => left', [
                        useAnimation(slideInLeft)
                    ]),
                ]),
            ],
        }),
        tslib_1.__metadata("design:paramtypes", [SeriesService])
    ], PremiereComponent);
    return PremiereComponent;
}());
export { PremiereComponent };
//# sourceMappingURL=premiere.component.js.map