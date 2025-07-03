import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TalentDevelopmentComponent } from './talent-development/talent-development.component';
import { TalentAcquisitionComponent } from './talent-acquisition/talent-acquisition.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { LeadershipDevelopmentComponent } from './leadership-development/leadership-development.component';
import { TalentReimaginedComponent } from './talent-reimagined/talent-reimagined.component';
import { ExecutiveSearchComponent } from './executive-search/executive-search.component';
import { TalentOptimisationComponent } from './talent-optimisation/talent-optimisation.component';
import { CoachingComponent } from './coaching/coaching.component';
import { CertificationComponent } from './certification/certification.component';
import { PricingComponent } from './pricing/pricing.component';
import { PlacementsComponent } from './placements/placements.component';
import { OurPlatformComponent } from './our-platform/our-platform.component';
import { WorkshopComponent } from './workshop/workshop.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'talent-development', component: TalentDevelopmentComponent },
  { path: 'talent-acquisition', component: TalentAcquisitionComponent },
  { path: 'assessment', component: AssessmentComponent },
  { path: 'leadership-development', component: LeadershipDevelopmentComponent },
  { path: 'about-us', component: TalentReimaginedComponent },
  { path: 'executive-search', component: ExecutiveSearchComponent },
  { path: 'talent-optimisation', component: TalentOptimisationComponent },
  // { path: 'coaching', component: CoachingComponent },
  { path: 'coaching', component: CertificationComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'placements', component: PlacementsComponent },
  { path: 'our-platform', component: OurPlatformComponent },
  { path: 'workshop', component: WorkshopComponent },

  {
    path: 'demo-assessment',
    loadChildren: () =>
      import('./demo-assessment/demo-assessment.module').then(m => m.DemoAssessmentModule)
  },


  { path: '', redirectTo: '', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollOffset: [0, 50],
    relativeLinkResolution: 'legacy',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
