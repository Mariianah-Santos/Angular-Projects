import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletContactComponent } from './delet-contact.component';

describe('DeletContactComponent', () => {
  let component: DeletContactComponent;
  let fixture: ComponentFixture<DeletContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
