import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.css'
})
export class Componente04Component {

  // variavel para exbiir o quadrado
  show: boolean = true;

  // função para mostra ou esconder o quadrado

  // toggle() {
  //   this.show = !this.show;
  // }

  // função para mostra ou esconder o quadrado
  toggle() {
    if (this.show === true) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
