import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BestRatedHighchartComponent } from './best-rated-highchart.component';
import { HttpClientModule } from '@angular/common/http'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
describe('BestRatedHighchartComponent', () => {
  let component: BestRatedHighchartComponent;
  let fixture: ComponentFixture<BestRatedHighchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule ],
      declarations: [ BestRatedHighchartComponent ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRatedHighchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
