import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var StatusTranslatePipe = /** @class */ (function () {
    function StatusTranslatePipe() {
    }
    StatusTranslatePipe.prototype.transform = function (value) {
        switch (value) {
            case 'Returning Series':
                return 'Powracający serial';
            case 'Ended':
                return 'Zakończona';
            default:
                return 'brak danych';
        }
    };
    StatusTranslatePipe = tslib_1.__decorate([
        Pipe({
            name: 'statusTranslate'
        })
    ], StatusTranslatePipe);
    return StatusTranslatePipe;
}());
export { StatusTranslatePipe };
//# sourceMappingURL=status-translate.pipe.js.map