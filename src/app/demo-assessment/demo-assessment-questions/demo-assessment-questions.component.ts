import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-assessment-questions',
  templateUrl: './demo-assessment-questions.component.html',
  styleUrls: ['./demo-assessment-questions.component.scss']
})
export class DemoAssessmentQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  currentIndex = 0;

  questions = [
    {
      question: "When faced with something new, I usually...",
      options: [
        { center_of_expression: "action", value: "Jump in and figure it out as I go." },
        { center_of_expression: "feeling", value: "Tune into how I feel before I act." },
        { center_of_expression: "thinking", value: "Pause to think it through first." }
      ]
    },
    {
      question: "I describe myself as someone who:",
      options: [
        { center_of_expression: "action", value: "Moves quickly and makes firm decisions." },
        { center_of_expression: "feeling", value: "Decide based on people and feelings." },
        { center_of_expression: "thinking", value: "Process ideas before making a deciding." }
      ]
    },
    {
      question: "I focus on ",
      options: [
        { center_of_expression: "action", value: "Results over emotions." },
        { center_of_expression: "feeling", value: "Relationships over tasks." },
        { center_of_expression: "thinking", value: "Logic over impulse" }
      ]
    },
    {
      question: "I connect most to",
      options: [
        { center_of_expression: "action", value: "Having control, staying grounded, and doing what’s right." },
        { center_of_expression: "feeling", value: "Being appreciated, feeling seen, and staying true to myself." },
        { center_of_expression: "thinking", value: "Having freedom, feeling secure, and understanding how things work." }
      ]
    },
    {
      question: "I solve problems by ",
      options: [
        { center_of_expression: "action", value: "Doing" },
        { center_of_expression: "feeling", value: "Understanding Emotions" },
        { center_of_expression: "thinking", value: "Planning" }
      ]
    },
    {
      question: "I trust ",
      options: [
        { center_of_expression: "action", value: "Action over overthinking" },
        { center_of_expression: "feeling", value: "Building Connections over speed" },
        { center_of_expression: "thinking", value: "Knowledge over quick moves" }
      ]
    },

    {
      question: "I prioritise ",
      options: [
        { center_of_expression: "action", value: "Getting things done over talking things through." },
        { center_of_expression: "feeling", value: "Getting along with others over pushing for results" },
        { center_of_expression: "thinking", value: "Having a clear plan over acting on impulse." }
      ]
    },

    {
      question: "I prefer",
      options: [
        { center_of_expression: "action", value: "action, movement and progress" },
        { center_of_expression: "feeling", value: "feelings, emotions and connection" },
        { center_of_expression: "thinking", value: "thoughts, information and ideas" }
      ]
    },

    {
      question: "I handle challenges by",
      options: [
        { center_of_expression: "action", value: "Taking charge" },
        { center_of_expression: "feeling", value: "Considering how others feel" },
        { center_of_expression: "thinking", value: "Gathering Information" }
      ]
    },

  ];

  selectedAnswers: { question: string; selectedOption: string; center_of_expression: string; }[] = [];

  selectedOptionIndex: number | null = null;

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
      // navigate to result page or show results
    }
  }

}
