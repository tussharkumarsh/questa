import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoAssessmentDataService } from '../demo-assessment-data.service';

@Component({
  selector: 'app-demo-assessment-start',
  templateUrl: './demo-assessment-start.component.html',
  styleUrls: ['./demo-assessment-start.component.scss'],
})
export class DemoAssessmentStartComponent implements OnInit {
  name: string = '';
  contact: string = '';
  formSubmitted: boolean = false;
  userData: { name: string; email: string } = { name: '', email: '' };

  constructor(
    private router: Router,
    private dataService: DemoAssessmentDataService
  ) {}

  ngOnInit(): void {
    this.userData = this.dataService.getUserInfo();
    this.sendUserToCorrectPage();
  }

  sendUserToCorrectPage() {
    if (!this.userData.name || !this.userData.email) {
      // If user data is not set, redirect to the form page
      this.router.navigate(['/demo-assessment']);
    }
  }

  isValidWorkEmail(email: string): boolean {
    const blockedDomains = [
      'gmail.com',
      'yahoo.com',
      'outlook.com',
      'hotmail.com',
      'icloud.com',
      'aol.com',
      'mail.com',
      'protonmail.com',
      'yandex.com',
      'zoho.com',
      'gmx.com',
      'rediffmail.com',
      'live.com',
      'msn.com',
      'hotmail.co.in',
      'hotmail.co.uk',
      'yahoo.co.in',
      'yahoo.co.uk',
      'yahoo.com.au',
      'yahoo.com.sg',
      'yahoo.com.ph',
    ];

    const domain = email.split('@')[1]?.toLowerCase();
    return typeof domain === 'string' && !blockedDomains.includes(domain);
  }

  isEmailFormatValid(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  startAssessment(): void {
    this.formSubmitted = true;

    if (!this.name.trim() || !this.checkContactValidation().valid) return;

    this.dataService.setUserData(this.name, this.contact);
    this.router.navigate(['/demo-assessment/questions']);
  }

  checkContactValidation(): { valid: boolean; error: string } {
    // work email validation or phone number validation
    if (!this.contact.trim()) {
      return { valid: false, error: 'Email or Phone Number is required.' };
    }

    if (this.contact.includes('@')) {
      // If contact contains '@', treat it as an email
      if (!this.isEmailFormatValid(this.contact)) {
        return { valid: false, error: 'Enter a valid email format.' };
      }
      if (!this.isValidWorkEmail(this.contact)) {
        return { valid: false, error: 'Only work email IDs are allowed.' };
      }
      // if user entered phone number, if number validation is needed, add it here
    } else if (!this.contact.match(/^[6789]\d{9}$/)) {
      return { valid: false, error: 'Please enter a valid phone number' };
    }
    return { valid: true, error: '' };
  }
}
