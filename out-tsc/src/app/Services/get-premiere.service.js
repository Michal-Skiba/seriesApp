import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ChangeLanguageService } from './change-language.service';
var GetPremiereService = /** @class */ (function () {
    function GetPremiereService(http, changeLanguageService) {
        this.http = http;
        this.changeLanguageService = changeLanguageService;
        this.language = this.changeLanguageService.getInfoLanguage();
    }
    GetPremiereService.prototype.getPremieres = function (date, page) {
        return this.http.get(environment.apiUrl + "discover/tv?api_key=" + environment.apiKey + "&language=" + this.language + "-US&sort_by=vote_average.asc&first_air_date.gte=" + date + "&first_air_date.lte=" + date + "&page=" + page + "&timezone=America%2FNew_York&include_null_first_air_dates=false");
    };
    GetPremiereService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, ChangeLanguageService])
    ], GetPremiereService);
    return GetPremiereService;
}());
export { GetPremiereService };
//# sourceMappingURL=get-premiere.service.js.map