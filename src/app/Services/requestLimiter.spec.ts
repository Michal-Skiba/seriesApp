import { RequestLimiter } from './requestLimiter';
import { FakeSeriesService } from 'src/app/test-services/fakeSeriesService.service';
import { Observable } from 'rxjs';

describe('RequestLimiter', () => {
    let component: RequestLimiter;
    let service: FakeSeriesService;
    let originalTimeout;

    beforeEach(() => {
        component = new RequestLimiter(10600, 39);
        service = new FakeSeriesService;
    });

    beforeEach(async () => {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 70000;
    });

    afterEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

    it('RequestLimiter should have limit method', () => {
        expect(component.limit(service.searchSeries(), 'test')).toBeTruthy();
    });

    it('should return a value from service, request counter should be bigger one time when limit' +
        'method what call, should be add to timestampCollection currentUrl should be that like ' +
        'parameter on function, counter should be one bigger after call function', () => {
            expect(component.requestCounter).toBe(1);
            component.limit(service.searchSeries(), 'test').subscribe((data) => {
                expect(data.results).toBeTruthy();
            })
            expect(component.requestCounter).toBe(2);
            expect(Object.keys(component.timestampCollection).length).toBe(0);
            component.limit(service.searchSeries(), 'test').subscribe();
            expect(Object.keys(component.timestampCollection).length).toBe(1);
            expect(component.currentUrl).toBe('test');
            expect(component.requestCounter).toBe(3);
        });

    it('RequestLimiter test limiter, should make 120 requests ', (done) => {
        expect(component.limit(service.searchSeries(), 'test')).toBeTruthy();
        const ts = [];
        for (let i = 0; i < 120; i++) {
            const o = Observable.of(null);
            component.limit(o, '').subscribe(e => {
                ts.push(e);
                if (i === 119) {
                    expect(ts.length).toBe(120);
                    done();
                }
            });
        }
    });
});
