import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ChangeLanguageService } from './Services/change-language.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(changeLanguageService) {
        this.changeLanguageService = changeLanguageService;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.getLanguage = function () {
        return this.changeLanguageService.getInfoLanguage();
    };
    AppComponent.prototype.changeLanguage = function (language) {
        this.changeLanguageService.changeLanguage(language);
        window.location.reload();
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeLanguageService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map