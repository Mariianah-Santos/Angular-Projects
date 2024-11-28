import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageServiceComponent } from './landing-page-service.component';

describe('LandingPageServiceComponent', () => {
  let component: LandingPageServiceComponent;
  let fixture: ComponentFixture<LandingPageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
