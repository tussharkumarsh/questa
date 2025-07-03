import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoAssessmentRoutingModule } from './demo-assessment-routing.module';
import { DemoAssessmentStartComponent } from './demo-assessment-start/demo-assessment-start.component';
import { DemoAssessmentQuestionsComponent } from './demo-assessment-questions/demo-assessment-questions.component';
import { DemoAssessmentResultComponent } from './demo-assessment-result/demo-assessment-result.component';


@NgModule({
  declarations: [
    DemoAssessmentStartComponent,
    DemoAssessmentQuestionsComponent,
    DemoAssessmentResultComponent
  ],
  imports: [
    CommonModule,
    DemoAssessmentRoutingModule
  ]
})
export class DemoAssessmentModule { }
