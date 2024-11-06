import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListCreateComponent } from './to-do-list-create.component';

describe('ToDoListCreateComponent', () => {
  let component: ToDoListCreateComponent;
  let fixture: ComponentFixture<ToDoListCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoListCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
