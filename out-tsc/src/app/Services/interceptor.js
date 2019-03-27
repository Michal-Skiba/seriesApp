import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
var InterceptorService = /** @class */ (function () {
    function InterceptorService() {
    }
    InterceptorService.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(
        // tap(evt => {
        //     if (evt instanceof HttpResponse) {
        //         console.log(evt)
        //     }
        // }),
        catchError(function (err) {
            return of(err);
        }));
    };
    return InterceptorService;
}());
export { InterceptorService };
//# sourceMappingURL=interceptor.js.map