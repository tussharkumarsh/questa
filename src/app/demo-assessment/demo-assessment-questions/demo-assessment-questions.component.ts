import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoAssessmentDataService } from '../demo-assessment-data.service';

@Component({
  selector: 'app-demo-assessment-questions',
  templateUrl: './demo-assessment-questions.component.html',
  styleUrls: ['./demo-assessment-questions.component.scss']
})
export class DemoAssessmentQuestionsComponent implements OnInit {

  name: string = '';
  email: string = '';
  currentIndex = 0;
  selectedAnswers: { question: string; selectedOption: string; center_of_expression: string; }[] = [];
  selectedOptionIndex: number | null = null;

  questions: any[] = [];


  constructor(
    private dataService: DemoAssessmentDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const userInfo = this.dataService.getUserInfo();
    this.name = userInfo.name;
    this.email = userInfo.email;
    this.questions = this.dataService.getQuestions();
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
      center_of_expression: selected.center_of_expression
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
      center_of_expression: selected.center_of_expression
    };

    this.dataService.setUserAnswers(this.selectedAnswers);
    this.router.navigate(['/demo-assessment/result']);
  }

}
