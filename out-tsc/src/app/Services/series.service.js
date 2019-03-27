import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
import 'rxjs/add/observable/of';
import { RequestLimiter } from './requestLimiter';
var SeriesService = /** @class */ (function () {
    function SeriesService(http, changeLanguageService) {
        this.http = http;
        this.changeLanguageService = changeLanguageService;
        this.delay = 0;
        this.firstRequestTime = null;
        this.currentRequestCounter = 0;
        this.arrayTimes = [];
        this.timesToSendRequest = [];
        this.limitReq = 39;
        this.limiter = new RequestLimiter(10000, 40);
        this.language = this.changeLanguageService.getInfoLanguage();
    }
    SeriesService.prototype.getSeriesDetail = function (seriesId) {
        return this.limiter.limit(this.http.get(environment.apiUrl + "tv/" + seriesId + "?api_key=" + environment.apiKey + "&language=" + this.language + "-US"));
    };
    SeriesService.prototype.searchSeries = function (seriesTitle, page) {
        return this.limiter.limit(this.http.get(environment.apiUrl + "search/tv?api_key=" + environment.apiKey + "&language=" + this.language + "-US&query=" + seriesTitle + "&page=" + page));
    };
    SeriesService.prototype.getCredits = function (seriesId) {
        return this.limiter.limit(this.http.get(environment.apiUrl + "tv/" + seriesId + "/credits?api_key=" + environment.apiKey + "&language=" + this.language + "-US"));
    };
    SeriesService.prototype.getSeasonEpisode = function (seriesId, seasonNumber) {
        return this.limiter.limit(this.http.get(environment.apiUrl + "tv/" + seriesId + "/season/" +
            (seasonNumber + "?api_key=" + environment.apiKey + "&language=" + this.language + "-US")));
    };
    SeriesService.prototype.getSimilarSeries = function (seriesId, page) {
        if (page === void 0) { page = 1; }
        return this.limiter.limit(this.http.get(environment.apiUrl + "tv/" + seriesId + "/similar?api_key=" + environment.apiKey +
            ("&language=" + this.language + "-US&page=" + page)));
    };
    SeriesService.prototype.getLastWeekTrends = function () {
        return this.limiter.limit(this.http.get(environment.apiUrl + "trending/tv/week?api_key=" + environment.apiKey));
    };
    SeriesService.prototype.getLastTrends = function (page) {
        return this.limiter.limit(this.http.get(environment.apiUrl + "tv/popular" +
            ("?api_key=" + environment.apiKey + "&language=" + this.language + "-US&page=" + page)));
    };
    SeriesService.prototype.getPremieres = function (date, page) {
        return this.limiter.limit(this.http.get(environment.apiUrl + "discover/tv?api_key=" + environment.apiKey + "&language=" + this.language + "-" +
            ("US&sort_by=vote_average.asc&first_air_date.gte=" + date + "&first_air_date.lte=" + date + "&page=" + page) +
            "&timezone=America%2FNew_York&include_null_first_air_dates=false"));
    };
    SeriesService.prototype.getTopratedSeries = function (page) {
        return this.limiter.limit(this.http.get(environment.apiUrl + "tv/top_rated?api_key=" + environment.apiKey +
            ("&language=" + this.language + "-US&page=" + page)));
    };
    SeriesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, ChangeLanguageService])
    ], SeriesService);
    return SeriesService;
}());
export { SeriesService };
//# sourceMappingURL=series.service.js.map