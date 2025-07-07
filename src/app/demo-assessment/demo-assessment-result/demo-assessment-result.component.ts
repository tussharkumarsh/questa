import { Component, OnInit } from '@angular/core';
import { DemoAssessmentDataService } from '../demo-assessment-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-assessment-result',
  templateUrl: './demo-assessment-result.component.html',
  styleUrls: ['./demo-assessment-result.component.scss'],
})
export class DemoAssessmentResultComponent implements OnInit {
  answers: any[] = [];
  userData: { name: string; email: string } = { name: '', email: '' };
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
  questions: {
    question: string;
    options: {
      center_of_expression: string;
      value: string;
    }[];
  }[] = [];

  constructor(
    private dataService: DemoAssessmentDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.answers = this.dataService.getUserAnswers();
    this.userData = this.dataService.getUserInfo();
    this.questions = this.dataService.getQuestions();
    this.calculateScore();

    this.sendUserToCorrectPage();
  }

  sendUserToCorrectPage() {
    if (!this.userData.name || !this.userData.email) {
      // If user data is not set, redirect to the form page
      this.router.navigate(['/demo-assessment']);
    } else if (this.answers.length < this.questions.length) {
      // If no answers are provided, redirect to the assessment page
      this.router.navigate(['/demo-assessment/questions']);
    } else {
      // If everything is set, redirect to the result page
      this.router.navigate(['/demo-assessment/result']);
    }
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
  }

  getPercentage(score: number): number {
    const totalScore = this.answers.length;

    if (totalScore === 0) return 0;

    return Math.round((score / totalScore) * 100);
  }
}
