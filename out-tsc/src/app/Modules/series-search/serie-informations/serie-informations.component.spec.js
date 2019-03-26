import { async, TestBed } from '@angular/core/testing';
import { SerieInformationsComponent } from './serie-informations.component';
describe('SerieDetailsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SerieInformationsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SerieInformationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=serie-informations.component.spec.js.map