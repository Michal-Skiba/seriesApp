import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieTileComponent } from './movie-tile.component';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SeriesService } from '@services/series.service';
import { Observable } from 'rxjs';

describe('MovieTileComponent', () => {
  // @ts-ignore
  let component = new MovieTileComponent(SeriesService, Router);
  let fixture: ComponentFixture<MovieTileComponent>;
  let debugElement: DebugElement;
  let service: SeriesService;
  const router = {
    navigate: jasmine.createSpy('navigate'),
    routeReuseStrategy: {
      shouldReuseRoute: 'test'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTileComponent ],
      imports: [
        HttpClientModule,
        RouterModule,
        MatCardModule,
        RouterTestingModule,
      ],
      providers: [
        SeriesService,
        { provide: Router, useValue: router }
      ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    sessionStorage.clear();
    fixture = TestBed.createComponent(MovieTileComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    service = debugElement.injector.get(SeriesService);
    spyOn(service, 'getSeriesDetail').and.returnValue(Observable.of(1, 2, 3));
    fixture.detectChanges();

  });

  afterEach(() => {
    sessionStorage.clear();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('after call getSeriesInfo, getSeriesDetail in SeriesService should be called. fullUrl should change from' +
    ' undefined to string', () => {
    expect(component.fullUrl).toBeFalsy();
    component.getSeriesInfo(1234);
    expect(service.getSeriesDetail).toHaveBeenCalled();
    expect(component.fullUrl).toBeTruthy();
  });

  it('after call showDetails route should change to /search/:id', () => {
    const id = '1234';
    component.showDetails(id);
    expect(router.navigate).toHaveBeenCalledWith(['/search/' + id]);
  });

  it('if series details is in sessions storage, getSeriesDetails should not been called', () => {
    const data = {
      data: 'data'
    };
    const id = '1234';
    sessionStorage.setItem(id, JSON.stringify(data));
    component.getSeriesInfo(+id);
    expect(service.getSeriesDetail).not.toHaveBeenCalled();
    expect(component.fullUrl).toBeTruthy();
  });
});
