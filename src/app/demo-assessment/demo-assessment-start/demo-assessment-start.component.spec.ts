import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAssessmentStartComponent } from './demo-assessment-start.component';

describe('DemoAssessmentStartComponent', () => {
  let component: DemoAssessmentStartComponent;
  let fixture: ComponentFixture<DemoAssessmentStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAssessmentStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAssessmentStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
