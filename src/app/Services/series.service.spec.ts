import { TestBed, getTestBed } from '@angular/core/testing';
import { SeriesService } from './series.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { doesNotThrow } from 'assert';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach( async () => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,  
        HttpClientTestingModule,
      ],
      providers: [
        SeriesService,
      ]
    })
    service = getTestBed().get(SeriesService);
    }
  );
  // it('should be created', () => {
  //   const service: SeriesService = TestBed.get(SeriesService);
  //   expect(service).toBeTruthy();
  // });

  it('test', () => {
    service.getLastWeekTrends().subscribe((s) => {
      console.log(s, 'aaaaaaaaaaa')
    })
  })

});
