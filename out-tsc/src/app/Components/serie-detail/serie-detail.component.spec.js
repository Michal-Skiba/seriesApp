import { async, TestBed } from '@angular/core/testing';
import { SerieDetailComponent } from './serie-detail.component';
import { SerieInformationsComponent } from '../serie-informations/serie-informations.component';
import { MatExpansionModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
describe('SerieDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SerieDetailComponent, SerieInformationsComponent],
            imports: [
                HttpClientModule,
                MatExpansionModule,
                RouterModule.forRoot([]),
            ],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SerieDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=serie-detail.component.spec.js.map