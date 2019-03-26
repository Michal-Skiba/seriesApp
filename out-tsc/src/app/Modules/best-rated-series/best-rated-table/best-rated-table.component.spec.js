import { async, TestBed } from '@angular/core/testing';
import { BestRatedTableComponent } from './best-rated-table.component';
import { MatDialog, MatTableModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BestRatedSeriesComponent } from '../best-rated-series/best-rated-series.component';
import { HttpClientModule } from '@angular/common/http';
describe('BestRatedTableComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BestRatedTableComponent, BestRatedSeriesComponent],
            imports: [
                MatTableModule,
                HttpClientModule,
            ],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                { provide: MatDialog, useValue: {} },
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BestRatedTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=best-rated-table.component.spec.js.map