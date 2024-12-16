import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente04InputsComponent } from './componente04-inputs.component';

describe('Componente04InputsComponent', () => {
  let component: Componente04InputsComponent;
  let fixture: ComponentFixture<Componente04InputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Componente04InputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente04InputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
