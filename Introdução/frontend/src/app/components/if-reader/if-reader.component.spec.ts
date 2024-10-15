import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfReaderComponent } from './if-reader.component';

describe('IfReaderComponent', () => {
  let component: IfReaderComponent;
  let fixture: ComponentFixture<IfReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IfReaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
