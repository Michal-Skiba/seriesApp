import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SeriesSearchComponent } from './series-search.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShowSeriesDetalService } from '@services/show-series-detail.service';
import { MockGetShowInfoComponent } from 'src/app/testClasses/mock-get-show-info/mock-get-show-info.component';

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
        { provide: ShowSeriesDetalService, useClass: MockGetShowInfoComponent },
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
    component.resetValues();  
    expect(component.startSearch).toBe(false);
    expect(component.dataSourceTable).toEqual([]);
    expect(component.showPremiere).toBe(false);
    expect(component.showSearchedItems).toBe(true);
    expect(component.tableIndex).toBe(1);   
  })

  it('should fucking working', (dataSourceTable) => {
    console.log(dataSourceTable, 'aaaaaaaaaaa')
  })

});
