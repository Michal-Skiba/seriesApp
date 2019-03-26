import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SeriesSearchComponent } from './series-search.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ShowSeriesDetalService } from '@services/show-series-detail.service';
import { By } from '@angular/platform-browser';
import { SeriesService } from '@services/series.service';
import { FakeShowSeriesDetalService } from 'src/app/test-services/fakeShowSeriesDetalService.service';
import { FakeSeriesService } from 'src/app/test-services/fakeSeriesService.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('SeriesSearchComponent', function () {
    var component;
    var fixture;
    var mockRouter = {
        routeReuseStrategy: Router,
        navigate: jasmine.createSpy('navigate')
    };
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                RouterTestingModule,
            ],
            declarations: [SeriesSearchComponent],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: ShowSeriesDetalService, useClass: FakeShowSeriesDetalService },
                { provide: SeriesService, useClass: FakeSeriesService },
                { provide: Router, useValue: mockRouter },
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SeriesSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        jasmine.clock().install();
    });
    afterEach(function () {
        jasmine.clock().uninstall();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should return showInfo', function () {
        component.ngOnInit();
        expect(component.isSerieDetailThere).toBe(true);
        expect(component.showPremiere).toBe(true);
        jasmine.clock().tick(10);
        expect(component.showPremiere).toBe(false);
    });
    it('called function should change route', function () {
        component.changeRoute('test');
        expect(mockRouter.navigate).toHaveBeenCalledWith(['test']);
        component.changeRoute('dragonball');
        expect(mockRouter.navigate).toHaveBeenCalledWith(['dragonball']);
    });
    it('called function should reset values', function () {
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
            }];
        component.showPremiere = true;
        component.showSearchedItems = false;
        component.resetValues();
        expect(component.dataSourceTable).toEqual([]);
        expect(component.showPremiere).toBe(false);
        expect(component.showSearchedItems).toBe(true);
    });
    it('test input field value', function () {
        var input = fixture.debugElement.query(By.css('input'));
        input.nativeElement.value = 'text';
        input.nativeElement.dispatchEvent(new Event('input'));
        expect(input.nativeElement.value).toContain('text');
    });
    it('test showDetails function, if event is true, searched items should be false', function () {
        expect(component.showSearchedItems).toBe(true);
        component.showDetails(true);
        expect(component.showSearchedItems).toBe(false);
    });
    it('searchSerie function should work when inputValue is longer than 3', function () {
        component.inputValue = "test";
        component.onSubmit();
        expect(component.searchSeriesTitle).toBe("test");
        expect(component.dataSourceTable.length).toBe(3);
    });
    it('dataSourceTable should have be empty, when input value is shorter or equal than 3', function () {
        component.inputValue = "tes";
        component.onSubmit();
        expect(component.dataSourceTable.length).toBe(0);
    });
});
//# sourceMappingURL=series-search.component.spec.js.map