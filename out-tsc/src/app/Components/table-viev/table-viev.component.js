import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var TableVievComponent = /** @class */ (function () {
    function TableVievComponent(router) {
        this.router = router;
        this.displayedColumns = ['title', 'premiereDate', 'rating', 'id'];
    }
    TableVievComponent.prototype.showInfo = function (id) {
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.navigate(["./search/" + id]);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], TableVievComponent.prototype, "dataSourceTable", void 0);
    TableVievComponent = tslib_1.__decorate([
        Component({
            selector: 'app-table-viev',
            templateUrl: './table-viev.component.html',
            styleUrls: ['./table-viev.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], TableVievComponent);
    return TableVievComponent;
}());
export { TableVievComponent };
//# sourceMappingURL=table-viev.component.js.map