import { async, TestBed } from '@angular/core/testing';
import { SerieDetailComponent } from './serie-detail.component';
describe('SerieDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SerieDetailComponent]
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