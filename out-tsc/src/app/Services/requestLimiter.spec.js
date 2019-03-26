import { RequestLimiter } from './requestLimiter';
import { FakeSeriesService } from 'src/app/test-services/fakeSeriesService.service';
describe('RequestLimiter', function () {
    var component;
    var service;
    beforeEach(function () {
        component = new RequestLimiter(10000, 40);
        service = new FakeSeriesService;
    });
    it('should create an instance', function () {
        expect(component).toBeTruthy();
    });
    it('RequestLimiter shoul have limit method', function () {
        expect(component.limit(service.searchSeries())).toBeTruthy();
    });
    it('should return a valu from service, request counter should be bigger one' +
        'time when limit method whas call, should be add to timestampCollection', function () {
        component.limit(service.searchSeries()).subscribe(function (data) {
            expect(data.results).toBeTruthy();
        });
        expect(Object.keys(component.timestampCollection).length).toBe(1);
        setTimeout(function () {
            component.limit(service.searchSeries()).subscribe();
            expect(Object.keys(component.timestampCollection).length).toBe(2);
        }, 1);
    });
});
//# sourceMappingURL=requestLimiter.spec.js.map