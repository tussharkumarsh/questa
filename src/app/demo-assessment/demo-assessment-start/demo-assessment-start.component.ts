import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoAssessmentDataService } from '../demo-assessment-data.service';

@Component({
  selector: 'app-demo-assessment-start',
  templateUrl: './demo-assessment-start.component.html',
  styleUrls: ['./demo-assessment-start.component.scss']
})
export class DemoAssessmentStartComponent implements OnInit {

  name: string = '';
  email: string = '';
  formSubmitted: boolean = false;

  constructor(
    private router: Router,
    private dataService: DemoAssessmentDataService
  ) { }


  ngOnInit(): void {
  }


  emailError: string = '';

  isValidWorkEmail(email: string): boolean {
    const blockedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
    const domain = email.split('@')[1]?.toLowerCase();
    return typeof domain === 'string' && !blockedDomains.includes(domain);
  }

  isEmailFormatValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  startAssessment(): void {
    this.formSubmitted = true;
    this.emailError = '';

    if (!this.name.trim() || !this.email.trim()) return;

    if (!this.isEmailFormatValid(this.email)) {
      this.emailError = 'Enter a valid email format.';
      return;
    }

    if (!this.isValidWorkEmail(this.email)) {
      this.emailError = 'Only work email IDs are allowed.';
      return;
    }

    this.dataService.setUserData(this.name, this.email);
    this.router.navigate(['/demo-assessment/questions']);
  }

}
