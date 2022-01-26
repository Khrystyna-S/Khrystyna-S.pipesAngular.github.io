import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson004Component } from './lesson004.component';

describe('Lesson004Component', () => {
  let component: Lesson004Component;
  let fixture: ComponentFixture<Lesson004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
