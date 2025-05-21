import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentAcquisitionComponent } from './talent-acquisition.component';

describe('TalentAcquisitionComponent', () => {
  let component: TalentAcquisitionComponent;
  let fixture: ComponentFixture<TalentAcquisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentAcquisitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentAcquisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
