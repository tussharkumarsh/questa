import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoAssessmentDataService } from '../demo-assessment-data.service';

@Component({
  selector: 'app-demo-assessment-questions',
  templateUrl: './demo-assessment-questions.component.html',
  styleUrls: ['./demo-assessment-questions.component.scss'],
})
export class DemoAssessmentQuestionsComponent implements OnInit {
  userData: { name: string; email: string } = { name: '', email: '' };
  currentIndex = 0;
  selectedAnswers: {
    question: string;
    selectedOption: string;
    center_of_expression: string;
  }[] = [];
  selectedOptionIndex: number | null = null;

  questions: {
    question: string;
    options: {
      center_of_expression: string;
      value: string;
    }[];
  }[] = [];
  answers: any[] = [];

  constructor(
    private dataService: DemoAssessmentDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userData = this.dataService.getUserInfo();
    this.questions = this.dataService.getQuestions();
    this.answers = this.dataService.getUserAnswers();

    this.sendUserToCorrectPage();
  }

  sendUserToCorrectPage() {
    if (!this.userData.name || !this.userData.email) {
      // If user data is not set, redirect to the form page
      this.router.navigate(['/demo-assessment']);
    } else if (this.questions.length === this.answers.length) {
      // If no questions are available, redirect to the form page
      this.router.navigate(['/demo-assessment/result']);
    }
  }

  selectOption(index: number) {
    this.selectedOptionIndex = index;
  }

  nextQuestion() {
    if (this.selectedOptionIndex === null) return;

    const currentQ = this.questions[this.currentIndex];
    const selected = currentQ.options[this.selectedOptionIndex];

    this.selectedAnswers[this.currentIndex] = {
      question: currentQ.question,
      selectedOption: selected.value,
      center_of_expression: selected.center_of_expression,
    };

    this.selectedOptionIndex = null;

    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      console.log('All answers submitted:', this.selectedAnswers);
    }
  }

  submitAssessment() {
    if (this.selectedOptionIndex === null) return;

    const currentQ = this.questions[this.currentIndex];
    const selected = currentQ.options[this.selectedOptionIndex];

    this.selectedAnswers[this.currentIndex] = {
      question: currentQ.question,
      selectedOption: selected.value,
      center_of_expression: selected.center_of_expression,
    };

    this.dataService.setUserAnswers(this.selectedAnswers);
    this.router.navigate(['/demo-assessment/result']);
  }
}
