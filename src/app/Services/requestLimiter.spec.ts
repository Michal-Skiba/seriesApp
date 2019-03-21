import { RequestLimiter } from './requestLimiter';
import { FakeSeriesService } from 'src/app/test-services/fakeSeriesService.service';
import { Observable } from 'rxjs';

describe('RequestLimiter', () => {
    let component: RequestLimiter;
    let service: FakeSeriesService;

    beforeEach(() => {  
        component = new RequestLimiter(10000, 40);   
        service = new FakeSeriesService;
    })

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

    it('RequestLimiter shoul have limit method', () => {
        expect(component.limit(service.searchSeries(), 'test')).toBeTruthy();
    });

    it('should return a valu from service, request counter should be bigger one' +
    'time when limit method whas call, should be add to timestampCollection', () => {
        component.limit(service.searchSeries(), 'test').subscribe((data) => {
            expect(data.results).toBeTruthy();
        })
        expect(Object.keys(component.timestampCollection).length).toBe(1)
        setTimeout(() => {
            component.limit(service.searchSeries(), 'test').subscribe()
            expect(Object.keys(component.timestampCollection).length).toBe(2)
        }, 1)
            // const limiter = new RequestLimiter(10000, 40);
            // const ts = [];
            // for (let i = 0; i < 2000; i++) {
            //     const o = Observable.of(null);
            //     limiter.limit(o, '').subscribe(e => {

            //     });
            // }
    });
});
