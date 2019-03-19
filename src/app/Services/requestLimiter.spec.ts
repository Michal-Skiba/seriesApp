import { RequestLimiter } from './requestLimiter';
import { FakeSeriesService } from 'src/app/test-services/fakeSeriesService.service';
import { browser } from 'protractor';

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
        expect(component.limit(service.searchSeries())).toBeTruthy();
    });

    it('should return a valu from service, request counter should be bigger one' +
    'time when limit method whas call, should be add to timestampCollection', () => {
        expect(component.requestCounter).toBe(1)
        component.limit(service.searchSeries()).subscribe((data) => {
            expect(data.results).toBeTruthy();
        })
        expect(component.requestCounter).toBe(2)
        expect(Object.keys(component.timestampCollection).length).toBe(1)
        setTimeout(() => {
            component.limit(service.searchSeries()).subscribe()
            expect(component.requestCounter).toBe(3)
            expect(Object.keys(component.timestampCollection).length).toBe(2)
        }, 1)
    
    });
});
