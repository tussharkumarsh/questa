import { Component, OnInit } from '@angular/core';
import { DemoAssessmentDataService } from '../demo-assessment-data.service';

@Component({
  selector: 'app-demo-assessment-result',
  templateUrl: './demo-assessment-result.component.html',
  styleUrls: ['./demo-assessment-result.component.scss']
})
export class DemoAssessmentResultComponent implements OnInit {

  answers: any[] = [];
  userData: any = {};


  constructor(
    private dataService: DemoAssessmentDataService
  ) { }

  ngOnInit(): void {
    this.answers = this.dataService.getUserAnswers();
    this.userData = this.dataService.getUserInfo();

    console.log('User Answers:', this.answers);
    console.log('User Data:', this.userData);
  }

}
