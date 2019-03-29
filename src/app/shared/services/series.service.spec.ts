import { getTestBed, TestBed } from '@angular/core/testing';
import { SeriesService } from './series.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RequestLimiter } from '@services/requestLimiter';

describe('SeriesService', () => {
  let injector: TestBed;
  let service: SeriesService;
  let httpMock: HttpTestingController;
  let requestLimiter: RequestLimiter;

  beforeEach(async () => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          RouterTestingModule,
        ],
        providers: [
          SeriesService,
          { provide: RequestLimiter, useValue: { limit: (x) => x }},
        ],
      });
      injector = getTestBed();
      service = TestBed.get(SeriesService);
      httpMock = injector.get(HttpTestingController);
      requestLimiter = injector.get(RequestLimiter);
    }
  );

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('class spy example', () => {
  // w before eachu //limiter = TestBed.get(RequestLimiter);
  //
  //   const data = [1, 2, 3];
  //   spyOn(limiter, 'limit').and.callThrough();  // pójdzie do metody z mocka
  //   spyOn(limiter, 'limit').and.callFake(y => y);  // podmienia metodę z mocka na tą tutaj (y => y)
  //   spyOn(limiter, 'limit').and.returnValue(data);  // nie odpala metody, od razu zwraca to co w nawiasie
  //
  //   expect(limiter.limit).toHaveBeenCalled();
  // });

  it('if getLastWeekTrends have been called, requestLimiter should be called with correct data', () => {
    spyOn(requestLimiter, 'limit').and.callThrough();
    service.getLastWeekTrends();

    expect(requestLimiter.limit).toHaveBeenCalledWith(service.getLastWeekTrends(), '/');
  });

  it('if getSeriesDetail have been called, requestLimiter should be called with correct data', () => {
    spyOn(requestLimiter, 'limit').and.callThrough();
    service.getSeriesDetail(1000);

    expect(requestLimiter.limit).toHaveBeenCalledWith(service.getSeriesDetail(1000), '/');
  });

  it('if searchSeries have been called, requestLimiter should be called with correct data', () => {
    spyOn(requestLimiter, 'limit').and.callThrough();
    service.searchSeries('test', 1000);

    expect(requestLimiter.limit).toHaveBeenCalledWith(service.searchSeries('test', 1000), '/');
  });

  it('if getCredits have been called, requestLimiter should be called with correct data', () => {
    spyOn(requestLimiter, 'limit').and.callThrough();
    service.getCredits(1000);

    expect(requestLimiter.limit).toHaveBeenCalledWith(service.getCredits(1000), '/');
  });

  it('if getSeasonEpisode have been called, requestLimiter should be called with correct data', () => {
    spyOn(requestLimiter, 'limit').and.callThrough();
    service.getSeasonEpisode(1000, 1000);

    expect(requestLimiter.limit).toHaveBeenCalledWith(service.getSeasonEpisode(1000, 1000), '/');
  });

  it('if getSimilarSeries have been called, requestLimiter should be called with correct data', () => {
    spyOn(requestLimiter, 'limit').and.callThrough();
    service.getSimilarSeries(1000, 1);

    expect(requestLimiter.limit).toHaveBeenCalledWith(service.getSimilarSeries(1000, 1), '/');
  });

  it('if searchSeries have been called, requestLimiter should be called with correct data', () => {
    spyOn(requestLimiter, 'limit').and.callThrough();
    service.searchSeries('test', 1000);
    expect(requestLimiter.limit).toHaveBeenCalledWith(service.searchSeries('test', 1000), '/');
  });

  it('if getLastTrends have been called, requestLimiter should be called with correct data', () => {
    spyOn(requestLimiter, 'limit').and.callThrough();
    service.getLastTrends(1000);
    expect(requestLimiter.limit).toHaveBeenCalledWith(service.getLastTrends(1000), '/');
  });

  it('if getPremieres have been called, requestLimiter should be called with correct data', () => {
    spyOn(requestLimiter, 'limit').and.callThrough();
    service.getPremieres('test', 1);
    expect(requestLimiter.limit).toHaveBeenCalledWith(service.getPremieres('test', 1), '/');
  });

  it('if getTopratedSeries have been called, requestLimiter should be called with correct data', () => {
    spyOn(requestLimiter, 'limit').and.callThrough();
    service.getTopratedSeries(1000);
    expect(requestLimiter.limit).toHaveBeenCalledWith(service.getTopratedSeries(1000), '/');
  });
});

