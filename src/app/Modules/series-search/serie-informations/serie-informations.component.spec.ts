import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieInformationsComponent } from './serie-informations.component';

describe('SerieDetailsComponent', () => {
  let component: SerieInformationsComponent;
  let fixture: ComponentFixture<SerieInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieInformationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
