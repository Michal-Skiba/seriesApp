import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
var GetLastTrendsService = /** @class */ (function () {
    function GetLastTrendsService(http, changeLanguageService) {
        this.http = http;
        this.changeLanguageService = changeLanguageService;
        this.language = this.changeLanguageService.getInfoLanguage();
    }
    GetLastTrendsService.prototype.getLastTrends = function (page) {
        return this.http.get(environment.apiUrl + "tv/popular?api_key=" + environment.apiKey + "&language=" + this.language + "-US&page=" + page);
    };
    GetLastTrendsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, ChangeLanguageService])
    ], GetLastTrendsService);
    return GetLastTrendsService;
}());
export { GetLastTrendsService };
//# sourceMappingURL=get-last-trends.service.js.map