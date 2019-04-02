import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SerieDetailComponent } from './serie-detail.component';
import { ShowSeriesDetailService} from '../../series-search/shared/show-series-detail.service';
import { SerieInformationsComponent } from '../serie-informations/serie-informations.component';
import { MatExpansionModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PopularityToStringPipe } from '../shared/populatiry-to-string.pipe';
import { SeriesService } from '@services/series.service';
import { Observable } from 'rxjs';

describe('SerieDetailComponent', () => {
  // @ts-ignore
  let component = new SerieDetailComponent(Router, ActivatedRoute,  ShowSeriesDetailService, SeriesService);
  let fixture: ComponentFixture<SerieDetailComponent>;
  let service: SeriesService;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SerieDetailComponent,
        SerieInformationsComponent,
        PopularityToStringPipe,
      ],
      imports: [
        HttpClientModule,
        MatExpansionModule,
        RouterModule.forRoot([]),
      ],
      providers: [
        ShowSeriesDetailService,

      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    service = debugElement.injector.get(SeriesService);
    spyOn(service, 'getSeriesDetail').and.returnValue(Observable.of({
      name: 'janusz',
      seasons: [1, 2],
    }));
    spyOn(service, 'getSimilarSeries').and.returnValue(Observable.of(1, 2, 3));
    spyOn(service, 'getCredits').and.returnValue(Observable.of(1, 2, 3));
    spyOn(service, 'getSeasonEpisode').and.returnValue(Observable.of(1, 2, 3));
    component.id = 1234;
    component.seasons = [1, 2];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('featchSeriesDetail method should call on seriesService getSeriesDetail and getSeasonEpisode', () => {
    component.fetchSeriesDetail();
    expect(service.getSeriesDetail).toHaveBeenCalled();
    expect(service.getSeasonEpisode).toHaveBeenCalled();
  });

  it('featchCredis method should call on seriesService getCredits', () => {
    component.fetchCredits();
    expect(service.getCredits).toHaveBeenCalled();
  });

  it('getEpisodesInfo method should call on seriesService getSeasonEpisode', () => {
    component.getEpisodesInfo();
    expect(service.getSeasonEpisode).toHaveBeenCalled();
  });

  it('loadMore method should call getSimilarSeries, and increment similarSeriesPageNumber', () => {
    expect(component.similarSeriesPageNumber).toBe(2);
    component.loadMore();
    expect(component.similarSeriesPageNumber).toBe(3);
    expect(service.getSimilarSeries).toHaveBeenCalled();
  });

});
