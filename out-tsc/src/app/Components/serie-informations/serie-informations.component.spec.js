import { async, TestBed } from '@angular/core/testing';
import { SerieInformationsComponent } from './serie-informations.component';
import { CountdownDirective } from '../../directives/countdown.directive';
import { HttpClientModule } from '@angular/common/http';
describe('SerieInformationsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
            ],
            declarations: [SerieInformationsComponent, CountdownDirective],
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