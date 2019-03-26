import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { environment } from '@environments/environment';
import { GetSeriesService } from '@services/get-series.service';
var SerieInformationsComponent = /** @class */ (function () {
    function SerieInformationsComponent(getSeriesService) {
        this.getSeriesService = getSeriesService;
        this.filmwebLink = environment.filmwebLink;
        this.imdbLink = environment.imdbLink;
    }
    SerieInformationsComponent.prototype.ngOnInit = function () {
        this.similarSeries$ = this.getSeriesService.getSimilarSeries(this.id);
        this.serieInformations$ = this.getSeriesService.getSeriesDetail(this.id);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], SerieInformationsComponent.prototype, "id", void 0);
    SerieInformationsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-serie-informations',
            templateUrl: './serie-informations.component.html',
            styleUrls: ['./serie-informations.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [GetSeriesService])
    ], SerieInformationsComponent);
    return SerieInformationsComponent;
}());
export { SerieInformationsComponent };
//# sourceMappingURL=serie-informations.component.js.map