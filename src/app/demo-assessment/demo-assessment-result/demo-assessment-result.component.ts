import { Component, OnInit } from '@angular/core';
import { DemoAssessmentDataService } from '../demo-assessment-data.service';

@Component({
  selector: 'app-demo-assessment-result',
  templateUrl: './demo-assessment-result.component.html',
  styleUrls: ['./demo-assessment-result.component.scss'],
})
export class DemoAssessmentResultComponent implements OnInit {
  answers: any[] = [];
  userData: any = {};
  scoreMap: {
    Action: number;
    Feeling: number;
    Thinking: number;
    dominantCentreOfExpression: 'Action' | 'Feeling' | 'Thinking';
  } = {
    Action: 0,
    Feeling: 0,
    Thinking: 0,
    dominantCentreOfExpression: 'Action',
  };

  constructor(private dataService: DemoAssessmentDataService) {}

  ngOnInit(): void {
    this.answers = this.dataService.getUserAnswers();
    this.userData = this.dataService.getUserInfo();
    this.calculateScore();

    console.log('User Answers:', this.answers);
    console.log('User Data:', this.userData);
  }

  calculateScore() {
    this.answers.forEach((answer) => {
      if (answer.center_of_expression === 'action') {
        this.scoreMap.Action++;
      } else if (answer.center_of_expression === 'feeling') {
        this.scoreMap.Feeling++;
      } else if (answer.center_of_expression === 'thinking') {
        this.scoreMap.Thinking++;
      }
    });

    // get the dominant center of expression
    const maxScore = Math.max(
      this.scoreMap.Action,
      this.scoreMap.Feeling,
      this.scoreMap.Thinking
    );
    if (maxScore === this.scoreMap.Action) {
      this.scoreMap.dominantCentreOfExpression = 'Action';
    } else if (maxScore === this.scoreMap.Feeling) {
      this.scoreMap.dominantCentreOfExpression = 'Feeling';
    } else if (maxScore === this.scoreMap.Thinking) {
      this.scoreMap.dominantCentreOfExpression = 'Thinking';
    }

    console.log(this.scoreMap);
  }

  getPercentage(score: number): number {
    const totalScore = this.answers.length;

    if (totalScore === 0) return 0;

    return Math.round((score / totalScore) * 100);
  }
}
