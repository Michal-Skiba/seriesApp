import { async, TestBed } from '@angular/core/testing';
import { BestRatedHighchartComponent } from './best-rated-highchart.component';
describe('BestRatedHighchartComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BestRatedHighchartComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BestRatedHighchartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=best-rated-highchart.component.spec.js.map