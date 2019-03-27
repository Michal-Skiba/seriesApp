import { of } from 'rxjs';
import { delay, switchMapTo, concatMap } from 'rxjs/operators';
var RequestLimiter = /** @class */ (function () {
    function RequestLimiter(windowTime, maxRequests) {
        this.windowTime = windowTime;
        this.maxRequests = maxRequests;
        this.timestampCollection = {};
    }
    RequestLimiter.prototype.limit = function (stream) {
        var _this = this;
        return of(null).pipe(concatMap(function () {
            var now = new Date();
            var beginTime = new Date(new Date().setSeconds(new Date(now).getSeconds() - _this.windowTime)).getTime() / 1000;
            var currentTime = now.getTime() / 1000;
            var sumOfRequests = _this.calc(beginTime, currentTime);
            _this.timestampCollection[currentTime] = sumOfRequests;
            var waitSeconds = 0;
            var timeDifference = (_this.windowTime - (currentTime -
                +_this.getTimeFromTimestampCol(sumOfRequests - _this.maxRequests)) * 1000);
            console.log(sumOfRequests, 'sumaaaaaaaaaa');
            if (timeDifference < 0) {
                _this.timestampCollection = {};
                waitSeconds = 0;
            }
            else if (sumOfRequests > _this.maxRequests && sumOfRequests < _this.maxRequests * 2 && timeDifference) {
                waitSeconds = timeDifference;
            }
            else if (sumOfRequests >= _this.maxRequests * 2) {
                var additionalTime = Math.floor(sumOfRequests / _this.maxRequests) - 1;
                waitSeconds = timeDifference + additionalTime * _this.windowTime;
            }
            return of(null).pipe(delay(waitSeconds), switchMapTo(stream));
        }));
    };
    RequestLimiter.prototype.calc = function (beginTime, endTime) {
        var requestCalc = 0;
        Object.keys(this.timestampCollection).forEach(function (key) {
            if (+key >= beginTime && endTime >= +key) {
                requestCalc++;
            }
        });
        return requestCalc;
    };
    RequestLimiter.prototype.getTimeFromTimestampCol = function (numberOfRequest) {
        var _this = this;
        return Object.keys(this.timestampCollection).find(function (key) { return _this.timestampCollection[key] === numberOfRequest; });
    };
    return RequestLimiter;
}());
export { RequestLimiter };
//# sourceMappingURL=requestLimiter.js.map