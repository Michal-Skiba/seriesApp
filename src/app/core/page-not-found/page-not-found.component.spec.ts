import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';
import { By } from '@angular/platform-browser';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;
  let pageNotFoundImg;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    pageNotFoundImg = fixture.debugElement.query(By.css('img'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('img should exist', () => {
    expect(pageNotFoundImg).toBeTruthy();
  });
});
