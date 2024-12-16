import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente04-inputs',
  templateUrl: './componente04-inputs.component.html',
  styleUrl: './componente04-inputs.component.css'
})
export class Componente04InputsComponent {

  @Output() name: string = "";
  handlerClick() {

  }

}
