import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiereComponent } from './premiere.component';
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PremiereComponent', () => {
  let component: PremiereComponent;
  let fixture: ComponentFixture<PremiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PremiereComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        MatIconModule,
        MatProgressSpinnerModule,
        RouterModule.forRoot([]),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

