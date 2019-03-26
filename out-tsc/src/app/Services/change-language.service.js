import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var ChangeLanguageService = /** @class */ (function () {
    function ChangeLanguageService() {
        this.choosenLanguage = new Subject();
        if (localStorage.getItem('language')) {
            this.language = localStorage.getItem('language');
            this.choosenLanguage.next(this.language);
        }
        else {
            this.language = 'en';
        }
    }
    ChangeLanguageService.prototype.changeLanguage = function (choosenLanguage) {
        this.language = choosenLanguage;
        this.choosenLanguage.next(this.language);
        localStorage.setItem('language', choosenLanguage);
    };
    ChangeLanguageService.prototype.getLanguageInfoObs = function () {
        return this.choosenLanguage.asObservable();
    };
    ChangeLanguageService.prototype.getInfoLanguage = function () {
        return this.language;
    };
    ChangeLanguageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ChangeLanguageService);
    return ChangeLanguageService;
}());
export { ChangeLanguageService };
//# sourceMappingURL=change-language.service.js.map