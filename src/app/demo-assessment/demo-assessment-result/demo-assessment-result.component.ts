import { Component, OnInit } from '@angular/core';
import { DemoAssessmentDataService } from '../demo-assessment-data.service';
import { Router } from '@angular/router';
import { interpretationData } from '../data/interpretation';

@Component({
  selector: 'app-demo-assessment-result',
  templateUrl: './demo-assessment-result.component.html',
  styleUrls: ['./demo-assessment-result.component.scss'],
})
export class DemoAssessmentResultComponent implements OnInit {
  answers: any[] = [];
  interpretation: { interpretation: string; suspenseStatement: string } = {
    interpretation: '',
    suspenseStatement: '',
  };
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

  scoreMapInPercent: {
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
    this.calculateScoreInPercent();
    this.getInterpretation();

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

  getInterpretation() {
    const interpretationData = this.dataService.getInterpretation();
    let key: '123' | '132' | '213' | '231' | '312' | '321' = '123';
    // key = highest score first + middle score second + lowest score last and in case of tie, use the order Action, Feeling, Thinking
    if (this.scoreMap.dominantCentreOfExpression === 'Action') {
      key = '123';
      if (this.scoreMap.Thinking > this.scoreMap.Feeling) {
        key = '132'; // Action > Thinking > Feeling
      }
    } else if (this.scoreMap.dominantCentreOfExpression === 'Feeling') {
      key = '213';
      if (this.scoreMap.Thinking > this.scoreMap.Action) {
        key = '231'; // Feeling > Thinking > Action
      }
    } else {
      key = '312';
      if (this.scoreMap.Feeling > this.scoreMap.Action) {
        key = '321'; // Thinking > Action > Feeling
      }
    }

    this.interpretation = interpretationData[key];
  }

  getPercentage(score: number): number {
    const totalScore = this.answers.length;

    if (totalScore === 0) return 0;

    return Math.round((score / totalScore) * 100);
  }

  calculateScoreInPercent() {
    const actionPercent = this.getPercentage(this.scoreMap.Action);
    const feelingPercent = this.getPercentage(this.scoreMap.Feeling);
    const thinkingPercent = this.getPercentage(this.scoreMap.Thinking);

    // Calculate the sum and adjust if it exceeds 100%
    let total = actionPercent + feelingPercent + thinkingPercent;
    let diff = total - 100;

    // Assign initial values
    this.scoreMapInPercent.Action = actionPercent;
    this.scoreMapInPercent.Feeling = feelingPercent;
    this.scoreMapInPercent.Thinking = thinkingPercent;

    if (diff > 0) {
      // Reduce the dominant centre's percent by the difference
      // Find the key with the minimum percentage
      const minKey = (['Action', 'Feeling', 'Thinking'] as const).reduce(
        (min, key) =>
          this.scoreMapInPercent[key] < this.scoreMapInPercent[min] ? key : min,
        'Action' as const
      );
      this.scoreMapInPercent[minKey] -= diff;
    }
  }
}
