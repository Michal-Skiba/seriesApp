import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.displayTill = false;
        this.displayedColumns = ['position', 'title', 'premiereDate', 'rating', 'id'];
        this.showDetails = new EventEmitter();
    }
    TableComponent.prototype.ngOnInit = function () {
        console.log(this.dataSourceTable, 'aaaaaaaaaaaa');
    };
    TableComponent.prototype.changeDisplaySeries = function (id) {
        this.id = id;
        this.displayTill = true;
    };
    TableComponent.prototype.showDetailsFlag = function ($event) {
        if ($event === true) {
            this.showDetails.emit(true);
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], TableComponent.prototype, "dataSourceTable", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], TableComponent.prototype, "id", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], TableComponent.prototype, "showDetails", void 0);
    TableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=table.component.js.map