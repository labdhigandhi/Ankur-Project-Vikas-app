import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingDiaryPage } from './training-diary.page';

describe('TrainingDiaryPage', () => {
  let component: TrainingDiaryPage;
  let fixture: ComponentFixture<TrainingDiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingDiaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
