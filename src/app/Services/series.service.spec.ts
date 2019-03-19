import { TestBed } from '@angular/core/testing';
import { SeriesService } from './series.service';
import { HttpClientModule } from '@angular/common/http';

describe('SeriesService', () => {
  let service: SeriesService;
  let originalTimeout;

  beforeEach( async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,  
      ],
      providers: [
        SeriesService,
      ]
    })
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    service = TestBed.get(SeriesService);
    }
  );

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test', () => {
  
    service.getLastWeekTrends().subscribe((data) =>  {
      console.log(`in success:`, data);
  }, (error) => {
      expect(error.status).not.toEqual(429)
  });
  })

});
