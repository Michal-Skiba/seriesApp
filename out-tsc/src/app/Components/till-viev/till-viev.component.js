import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var TillVievComponent = /** @class */ (function () {
    function TillVievComponent() {
        this.showDetails = new EventEmitter();
    }
    TillVievComponent.prototype.showDetailsFlag = function ($event) {
        if ($event === true) {
            this.showDetails.emit(true);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], TillVievComponent.prototype, "dataSource", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TillVievComponent.prototype, "showDetails", void 0);
    TillVievComponent = tslib_1.__decorate([
        Component({
            selector: 'app-till-viev',
            templateUrl: './till-viev.component.html',
            styleUrls: ['./till-viev.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TillVievComponent);
    return TillVievComponent;
}());
export { TillVievComponent };
//# sourceMappingURL=till-viev.component.js.map