// src/app/demo-assessment/demo-assessment-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoAssessmentStartComponent } from './demo-assessment-start/demo-assessment-start.component';
import { DemoAssessmentQuestionsComponent } from './demo-assessment-questions/demo-assessment-questions.component';
import { DemoAssessmentResultComponent } from './demo-assessment-result/demo-assessment-result.component';

const routes: Routes = [
  { path: 'start', component: DemoAssessmentStartComponent },
  { path: 'questions', component: DemoAssessmentQuestionsComponent },
  { path: 'result', component: DemoAssessmentResultComponent },
  { path: '', redirectTo: 'start', pathMatch: 'full' },  // default redirect to start
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DemoAssessmentRoutingModule { }
