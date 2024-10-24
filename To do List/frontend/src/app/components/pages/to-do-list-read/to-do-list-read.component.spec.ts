import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListReadComponent } from './to-do-list-read.component';

describe('ToDoListReadComponent', () => {
  let component: ToDoListReadComponent;
  let fixture: ComponentFixture<ToDoListReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoListReadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
