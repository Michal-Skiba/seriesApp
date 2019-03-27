import { async, TestBed } from '@angular/core/testing';
import { VievWrapperComponent } from './viev-wrapper.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule, MatSlideToggleModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('VievComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [VievWrapperComponent],
            imports: [
                RouterTestingModule,
                MatIconModule,
                MatSlideToggleModule,
            ],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(VievWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=viev-wrapper.component.spec.js.map