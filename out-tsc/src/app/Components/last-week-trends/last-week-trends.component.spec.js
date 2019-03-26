import { async, TestBed } from '@angular/core/testing';
import { LastWeekTrendsComponent } from './last-week-trends.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('LastWeekTrendsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, RouterTestingModule],
            providers: [],
            declarations: [LastWeekTrendsComponent],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LastWeekTrendsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=last-week-trends.component.spec.js.map