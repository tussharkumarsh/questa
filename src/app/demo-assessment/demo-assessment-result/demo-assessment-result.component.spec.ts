import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAssessmentResultComponent } from './demo-assessment-result.component';

describe('DemoAssessmentResultComponent', () => {
  let component: DemoAssessmentResultComponent;
  let fixture: ComponentFixture<DemoAssessmentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAssessmentResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAssessmentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
