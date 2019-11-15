import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicGroupQuestionComponent } from './dynamic-group-question.component';

describe('DynamicGroupQuestionComponent', () => {
  let component: DynamicGroupQuestionComponent;
  let fixture: ComponentFixture<DynamicGroupQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicGroupQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicGroupQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
