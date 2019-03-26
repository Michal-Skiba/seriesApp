import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
var GetLastWeekTrendsService = /** @class */ (function () {
    function GetLastWeekTrendsService(http) {
        this.http = http;
    }
    GetLastWeekTrendsService.prototype.getLastTrends = function () {
        return this.http.get(environment.apiUrl + "trending/tv/week?api_key=" + environment.apiKey);
    };
    GetLastWeekTrendsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], GetLastWeekTrendsService);
    return GetLastWeekTrendsService;
}());
export { GetLastWeekTrendsService };
//# sourceMappingURL=get-last-week-trends.service.js.map