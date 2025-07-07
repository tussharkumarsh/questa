import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAssessmentQuestionsComponent } from './demo-assessment-questions.component';

describe('DemoAssessmentQuestionsComponent', () => {
  let component: DemoAssessmentQuestionsComponent;
  let fixture: ComponentFixture<DemoAssessmentQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAssessmentQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAssessmentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
