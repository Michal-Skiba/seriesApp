import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { GetSeriesService } from '@services/get-series.service';
import * as Highcharts from 'highcharts/highstock';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var BestRatedHighchartComponent = /** @class */ (function () {
    function BestRatedHighchartComponent(getSeriesService, dialogRef, data) {
        var _this = this;
        this.getSeriesService = getSeriesService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.loading = true;
        this.chartOptions = {};
        this.PieChartOptions = {};
        this.Highcharts = Highcharts;
        var episodesCount = [];
        var name = '';
        var voteAverage = 0;
        var voteToTen = 0;
        this.getSeriesService.getSeriesDetail(this.data).subscribe(function (dataSeries) {
            voteAverage = dataSeries.vote_average;
            voteToTen = parseFloat((10 - voteAverage).toFixed(2));
            name = dataSeries.name;
            dataSeries.seasons.forEach(function (data) {
                episodesCount.push(data.episode_count);
            });
            _this.chartOptions = {
                series: [{
                        name: 'Sezon',
                        data: episodesCount || 0,
                        pointInterval: 1,
                    }],
                title: {
                    text: name + ": ilo\u015B\u0107 odcink\u00F3w w sezonie",
                },
                yAxis: {
                    title: {
                        text: 'Liczba odcinków',
                    }
                },
                tooltip: {
                    enabled: false,
                },
            };
            _this.PieChartOptions = {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                },
                dataLabels: {
                    enabled: true,
                },
                title: {
                    text: 'Ocena filmu',
                },
                series: [{
                        colorByPoint: true,
                        data: [{
                                name: 'Średnia ocena',
                                y: voteAverage,
                            },
                            {
                                name: '',
                                y: voteToTen,
                                color: 'red',
                            },
                        ]
                    }]
            };
        }, function (error) { return console.log(error); }, function () {
            _this.loading = false;
        });
    }
    BestRatedHighchartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-best-rated-highchart',
            templateUrl: './best-rated-highchart.component.html',
            styleUrls: ['./best-rated-highchart.component.scss']
        }),
        tslib_1.__param(2, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [GetSeriesService,
            MatDialogRef, Number])
    ], BestRatedHighchartComponent);
    return BestRatedHighchartComponent;
}());
export { BestRatedHighchartComponent };
//# sourceMappingURL=best-rated-highchart.component.js.map