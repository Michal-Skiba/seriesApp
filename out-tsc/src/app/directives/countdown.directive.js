import * as tslib_1 from "tslib";
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { NextEpisode } from '@models/nextEpisode.model';
import { interval } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
var CountdownDirective = /** @class */ (function () {
    function CountdownDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.timer = interval(1000);
    }
    CountdownDirective.prototype.getTime = function () {
        var time;
        var countDownDate = new Date(this.serieTime.air_date + " " + " 10:00:00").getTime();
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        time = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
        this.renderer.setProperty(this.el.nativeElement, 'innerHTML', " " + time);
    };
    CountdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.getTime();
        this.subscription = this.timer.subscribe(function () { return _this.getTime(); });
    };
    CountdownDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", NextEpisode)
    ], CountdownDirective.prototype, "serieTime", void 0);
    CountdownDirective = tslib_1.__decorate([
        Directive({
            selector: '[appCountdown]'
        }),
        tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
    ], CountdownDirective);
    return CountdownDirective;
}());
export { CountdownDirective };
//# sourceMappingURL=countdown.directive.js.map