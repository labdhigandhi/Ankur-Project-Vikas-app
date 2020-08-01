import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentattendancePage } from './studentattendance.page';

describe('StudentattendancePage', () => {
  let component: StudentattendancePage;
  let fixture: ComponentFixture<StudentattendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentattendancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentattendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
