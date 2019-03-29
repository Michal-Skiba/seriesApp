import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from './menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
      ],
      declarations: [ MenuComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
