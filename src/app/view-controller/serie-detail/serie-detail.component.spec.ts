import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SerieDetailComponent } from './serie-detail.component';
import { ShowSeriesDetailService} from '../../series-search/shared/show-series-detail.service';
import { SerieInformationsComponent } from '../serie-informations/serie-informations.component';
import { MatExpansionModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PopularityToStringPipe } from '../shared/populatiry-to-string.pipe';


describe('SerieDetailComponent', () => {
  let component: SerieDetailComponent;
  let fixture: ComponentFixture<SerieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SerieDetailComponent,
        SerieInformationsComponent,
        PopularityToStringPipe,
      ],
      imports: [
        HttpClientModule,
        MatExpansionModule,
        RouterModule.forRoot([]),
      ],
      providers: [ ShowSeriesDetailService ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
