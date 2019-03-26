var _this = this;
import * as tslib_1 from "tslib";
import { TestBed } from '@angular/core/testing';
import { SeriesService } from './series.service';
import { HttpClientModule } from '@angular/common/http';
describe('SeriesService', function () {
    var service;
    var originalTimeout;
    beforeEach(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            TestBed.configureTestingModule({
                imports: [
                    HttpClientModule,
                ],
                providers: [
                    SeriesService,
                ]
            });
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            service = TestBed.get(SeriesService);
            return [2 /*return*/];
        });
    }); });
    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
    it('test', function () {
        service.getLastWeekTrends().subscribe(function (data) {
            console.log("in success:", data);
        }, function (error) {
            expect(error.status).not.toEqual(429);
        });
    });
});
//# sourceMappingURL=series.service.spec.js.map