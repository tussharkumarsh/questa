import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { TalentDevelopmentComponent } from './talent-development/talent-development.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TalentAcquisitionComponent } from './talent-acquisition/talent-acquisition.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { CountUpModule } from 'ngx-countup';
import { LeadershipDevelopmentComponent } from './leadership-development/leadership-development.component';
import { TalentReimaginedComponent } from './talent-reimagined/talent-reimagined.component';
import { ExecutiveSearchComponent } from './executive-search/executive-search.component';
import { TalentOptimisationComponent } from './talent-optimisation/talent-optimisation.component';
import { CoachingComponent } from './coaching/coaching.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CertificationComponent } from './certification/certification.component';
import { PricingComponent } from './pricing/pricing.component';
import { PlacementsComponent } from './placements/placements.component';
import { OurPlatformComponent } from './our-platform/our-platform.component';
import { WorkshopComponent } from './workshop/workshop.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    LandingPageComponent,
    FooterPageComponent,
    TalentDevelopmentComponent,
    TalentAcquisitionComponent,
    AssessmentComponent,
    LeadershipDevelopmentComponent,
    TalentReimaginedComponent,
    ExecutiveSearchComponent,
    TalentOptimisationComponent,
    CoachingComponent,
    CertificationComponent,
    PricingComponent,
    PlacementsComponent,
    OurPlatformComponent,
    WorkshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    CountUpModule,

    HttpClientModule,
    FormsModule,

  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
