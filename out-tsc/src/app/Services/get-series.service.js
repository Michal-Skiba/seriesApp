import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
var GetSeriesService = /** @class */ (function () {
    function GetSeriesService(http, changeLanguageService) {
        this.http = http;
        this.changeLanguageService = changeLanguageService;
        this.language = this.changeLanguageService.getInfoLanguage();
    }
    GetSeriesService.prototype.getSeriesDetail = function (seriesId) {
        return this.http.get(environment.apiUrl + "tv/" + seriesId + "?api_key=" + environment.apiKey + "&language=" + this.language + "-US")
            .pipe(retry(20));
    };
    GetSeriesService.prototype.searchSeries = function (seriesTitle, page) {
        return this.http.get(environment.apiUrl + "search/tv?api_key=" + environment.apiKey + "&language=" + this.language + "-US&query=" + seriesTitle + "&page=" + page)
            .pipe(retry(20));
    };
    GetSeriesService.prototype.getCredits = function (seriesId) {
        return this.http.get(environment.apiUrl + "tv/" + seriesId + "/season/{season_number}/credits?api_key=" + environment.apiKey + "&language=" + this.language + "-US")
            .pipe(retry(20));
    };
    GetSeriesService.prototype.getSeasonEpisode = function (seriesId, seasonNumber) {
        return this.http.get(environment.apiUrl + "tv/" + seriesId + "/season/" + seasonNumber + "?api_key=" + environment.apiKey + "&language=" + this.language + "-US")
            .pipe(retry(20));
    };
    GetSeriesService.prototype.getSimilarSeries = function (seriesId, page) {
        if (page === void 0) { page = 1; }
        return this.http.get(environment.apiUrl + "tv/" + seriesId + "/similar?api_key=" + environment.apiKey + "&language=" + this.language + "-US&page=" + page)
            .pipe(retry(20));
    };
    GetSeriesService.prototype.getLastTrends = function () {
        return this.http.get(environment.apiUrl + "trending/tv/week?api_key=" + environment.apiKey);
    };
    GetSeriesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, ChangeLanguageService])
    ], GetSeriesService);
    return GetSeriesService;
}());
export { GetSeriesService };
//# sourceMappingURL=get-series.service.js.map