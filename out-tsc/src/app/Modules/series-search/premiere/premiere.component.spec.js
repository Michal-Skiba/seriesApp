import { async, TestBed } from '@angular/core/testing';
import { PremiereComponent } from './premiere.component';
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('PremiereComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PremiereComponent],
            imports: [
                BrowserAnimationsModule,
                HttpClientModule,
                MatIconModule,
                RouterModule,
                MatProgressSpinnerModule,
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PremiereComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=premiere.component.spec.js.map