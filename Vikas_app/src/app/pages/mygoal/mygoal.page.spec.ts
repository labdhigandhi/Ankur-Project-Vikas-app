import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MygoalPage } from './mygoal.page';

describe('MygoalPage', () => {
  let component: MygoalPage;
  let fixture: ComponentFixture<MygoalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MygoalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MygoalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
