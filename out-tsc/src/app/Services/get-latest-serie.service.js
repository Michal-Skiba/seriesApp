import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
var GetLatestSerieService = /** @class */ (function () {
    function GetLatestSerieService(http, changeLanguageService) {
        this.http = http;
        this.changeLanguageService = changeLanguageService;
        this.language = this.changeLanguageService.getInfoLanguage();
    }
    GetLatestSerieService.prototype.getLatestSerie = function () {
        return this.http.get(environment.apiUrl + "tv/latest?api_key=" + environment.apiKey + "&language=" + this.language + "-US");
    };
    GetLatestSerieService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, ChangeLanguageService])
    ], GetLatestSerieService);
    return GetLatestSerieService;
}());
export { GetLatestSerieService };
//# sourceMappingURL=get-latest-serie.service.js.map