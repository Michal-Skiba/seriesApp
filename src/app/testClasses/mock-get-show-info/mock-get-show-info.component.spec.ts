import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockGetShowInfoComponent } from './mock-get-show-info.component';

describe('MockGetShowInfoComponent', () => {
  let component: MockGetShowInfoComponent;
  let fixture: ComponentFixture<MockGetShowInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockGetShowInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockGetShowInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
