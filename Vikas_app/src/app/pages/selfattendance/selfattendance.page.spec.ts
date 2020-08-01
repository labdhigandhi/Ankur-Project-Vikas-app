import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfattendancePage } from './selfattendance.page';

describe('SelfattendancePage', () => {
  let component: SelfattendancePage;
  let fixture: ComponentFixture<SelfattendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfattendancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfattendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
