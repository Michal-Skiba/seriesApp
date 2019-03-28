import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SerieInformationsComponent } from './serie-informations.component';
import { CountdownDirective } from '../shared/countdown.directive';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PopularityToStringPipe } from '../shared/populatiry-to-string.pipe';

describe('SerieInformationsComponent', () => {
  let component: SerieInformationsComponent;
  let fixture: ComponentFixture<SerieInformationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule,
      ],
      declarations: [
        SerieInformationsComponent,
        CountdownDirective,
        PopularityToStringPipe
      ],
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
