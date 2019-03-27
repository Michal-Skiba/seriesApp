import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
var GetTopRatedSeriesService = /** @class */ (function () {
    function GetTopRatedSeriesService(http, changeLanguageService) {
        this.http = http;
        this.changeLanguageService = changeLanguageService;
        this.language = this.changeLanguageService.getInfoLanguage();
    }
    GetTopRatedSeriesService.prototype.getTopratedSeries = function (page) {
        return this.http.get(environment.apiUrl + "tv/top_rated?api_key=" + environment.apiKey + "&language=" + this.language + "-US&page=" + page);
    };
    GetTopRatedSeriesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, ChangeLanguageService])
    ], GetTopRatedSeriesService);
    return GetTopRatedSeriesService;
}());
export { GetTopRatedSeriesService };
//# sourceMappingURL=get-top-rated-series.service.js.map