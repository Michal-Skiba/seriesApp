import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SeriesSearchComponent } from './series-search.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShowSeriesDetalService } from '@services/show-series-detail.service';
import { By } from '@angular/platform-browser';
import { SeriesService } from '@services/series.service';
import { FakeShowSeriesDetalService } from 'src/app/test-services/fakeShowSeriesDetalService.service';
import { FakeSeriesService } from 'src/app/test-services/fakeSeriesService.service';


describe('SeriesSearchComponent', () => {
  let component: SeriesSearchComponent;
  let fixture: ComponentFixture<SeriesSearchComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,        
      ],
      declarations: [ SeriesSearchComponent ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ 
        { provide: ShowSeriesDetalService, useClass:FakeShowSeriesDetalService },
        { provide: SeriesService, useClass: FakeSeriesService },
        { provide: Router, useValue: mockRouter},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return showInfo', () => {
    component.ngOnInit();
    expect(component.isSerieDetailThere).toBe(true);
    expect(component.showPremiere).toBe(true);
    jasmine.clock().tick(10);
    expect(component.showPremiere).toBe(false);
  })

  it('called function should change route', () => {
    component.changeRoute('test');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['test']);
    component.changeRoute('dragonball');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['dragonball']);
  })

  it('called function should reset values', () => {
    component.dataSourceTable = [{
      backdrop_path: 'test',
      first_air_date: 'test',
      genre_ids: [1, 2, 3],
      id: 199,
      name: 'test',
      origin_country: ['test'],
      original_language: 'test',
      original_name: 'test',
      overview: 'test',
      popularity: 11,
      poster_path: 'test',
      vote_average: 33,
      vote_count: 11,
    }]
    component.showPremiere = true;
    component.showSearchedItems = false;
    component.resetValues();  
    expect(component.dataSourceTable).toEqual([]);
    expect(component.showPremiere).toBe(false);
    expect(component.showSearchedItems).toBe(true);
  })

  it('test input field value',  () => {
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = 'text';
    input.nativeElement.dispatchEvent(new Event('input'));
    expect(input.nativeElement.value).toContain('text');
  })

  it('test showDetails function, if event is true, searched items should be false',  () => {
    expect(component.showSearchedItems).toBe(true); 
    component.showDetails(true)
    expect(component.showSearchedItems).toBe(false); 
  })


  it('searchSerie function should work when inputValue is longer than 3', () => { 
    component.inputValue = "test"
    component.onSubmit()
    expect(component.searchSeriesTitle).toBe("test")
    expect(component.dataSourceTable.length).toBe(3)
  })

  it('dataSourceTable should have be empty, when input value is shorter or equal than 3', () => {
    component.inputValue = "tes"
    component.onSubmit();
    expect(component.dataSourceTable.length).toBe(0);
  })
});
