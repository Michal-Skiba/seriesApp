import { async, TestBed } from '@angular/core/testing';
import { BestRatedSeriesComponent } from './best-rated-series.component';
import { BestRatedTableComponent } from '../best-rated-table/best-rated-table.component';
import { MatTabsModule, MatIconModule, MatTableModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('BestRatedSeriesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                MatTabsModule,
                MatIconModule,
                MatTableModule,
                MatProgressSpinnerModule,
                HttpClientModule,
                MatDialogModule,
                BrowserAnimationsModule
            ],
            declarations: [BestRatedSeriesComponent, BestRatedTableComponent],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BestRatedSeriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=best-rated-series.component.spec.js.map