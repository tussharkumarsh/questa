import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentDevelopmentComponent } from './talent-development.component';

describe('TalentDevelopmentComponent', () => {
  let component: TalentDevelopmentComponent;
  let fixture: ComponentFixture<TalentDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
