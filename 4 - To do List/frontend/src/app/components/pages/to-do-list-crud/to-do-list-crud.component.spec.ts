import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListCrudComponent } from './to-do-list-crud.component';

describe('ToDoListCrudComponent', () => {
  let component: ToDoListCrudComponent;
  let fixture: ComponentFixture<ToDoListCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoListCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
