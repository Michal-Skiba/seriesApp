import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var PopulatiryToStringPipe = /** @class */ (function () {
    function PopulatiryToStringPipe() {
    }
    PopulatiryToStringPipe.prototype.transform = function (value) {
        if (value > 200) {
            return 'bardzo popularne';
        }
        else if (value > 100) {
            return 'popularne';
        }
        else if (value > 50) {
            return 'średnio popularne';
        }
        else {
            return 'nie popularne';
        }
    };
    PopulatiryToStringPipe = tslib_1.__decorate([
        Pipe({
            name: 'populatiryToString'
        })
    ], PopulatiryToStringPipe);
    return PopulatiryToStringPipe;
}());
export { PopulatiryToStringPipe };
//# sourceMappingURL=populatiry-to-string.pipe.js.map