import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieInformationsComponent } from './serie-informations.component';
import { MatExpansionModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CountdownDirective } from '../../../directives/countdown.directive';
import { HttpClientModule } from '@angular/common/http';

describe('SerieInformationsComponent', () => {
  let component: SerieInformationsComponent;
  let fixture: ComponentFixture<SerieInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      declarations: [ SerieInformationsComponent, CountdownDirective ],
      
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
