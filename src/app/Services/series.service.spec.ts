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
    console.log('dzialammmmmm')
    expect(service).toBeTruthy();
  });

  it('test', () => {
    console.log('ssssssssssss')
    // service.getLastWeekTrends().subscribe((s) => {return console.log()})
    service.getLastWeekTrends().subscribe((s) => {
  
      console.log('w srodku')
    })
  })

});
