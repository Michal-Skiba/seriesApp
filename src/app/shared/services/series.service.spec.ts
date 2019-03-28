import { TestBed } from '@angular/core/testing';
import { SeriesService } from './series.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('SeriesService', () => {
  let service: SeriesService;
  let originalTimeout;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        SeriesService,
      ]
    });
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    service = TestBed.get(SeriesService);
  }
  );

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getLastWeekTrends', (done) => {
    service.getLastWeekTrends().subscribe((data) => {
      expect(data.results).toBeTruthy();
      done();
    }, (error) => {
      expect(error.status).not.toEqual(429);
      expect(error.status).not.toEqual(404);
      done();
    });
  });

  it('getSeriesDetail', (done) => {
    service.getSeriesDetail(12609).subscribe((data) => {
      expect(data).toBeTruthy();
      done();
    }, (error) => {
      expect(error.status).not.toEqual(429);
      expect(error.status).not.toEqual(404);
      done();
    });
  });

  it('searchSeries', (done) => {
    service.searchSeries('dragon', 1).subscribe((data) => {
      expect(data).toBeTruthy();
      done();
    }, (error) => {
      expect(error.status).not.toEqual(429);
      expect(error.status).not.toEqual(404);
      done();
    });
  });

  it('getCredits', (done) => {
    service.getCredits(12609).subscribe((data) => {
      expect(data).toBeTruthy()
      done();
    }, (error) => {
      expect(error.status).not.toEqual(429);
      expect(error.status).not.toEqual(404);
      done();
    });
  });

  it('getSeasonEpisode', (done) => {
    service.getSeasonEpisode(12609, 1).subscribe((data) => {
      expect(data).toBeTruthy()
      done();
    }, (error) => {
      expect(error.status).not.toEqual(429);
      expect(error.status).not.toEqual(404);
      done();
    });
  });

  it('getSimilarSeries', (done) => {
    service.getSimilarSeries(12609, 1).subscribe((data) => {
      expect(data).toBeTruthy();
      done();
    }, (error) => {
      expect(error.status).not.toEqual(429);
      expect(error.status).not.toEqual(404);
      done();
    });
  });

  it('getLastTrends', (done) => {
    service.getLastTrends(1).subscribe((data) => {
      expect(data).toBeTruthy()
      done();
    }, (error) => {
      expect(error.status).not.toEqual(429);
      expect(error.status).not.toEqual(404);
      done();
    });
  });

  it('getPremieres', (done) => {
    service.getPremieres('2019-03-20' ,1).subscribe((data) => {
      expect(data).toBeTruthy()
      done();
    }, (error) => {
      expect(error.status).not.toEqual(429);
      expect(error.status).not.toEqual(404);
      done();
    });
  });

  it('getTopratedSeries', (done) => {
    service.getTopratedSeries(1).subscribe((data) => {
      expect(data).toBeTruthy()
      done();
    }, (error) => {
      expect(error.status).not.toEqual(429);
      expect(error.status).not.toEqual(404);
      done();
    });
  });
});
