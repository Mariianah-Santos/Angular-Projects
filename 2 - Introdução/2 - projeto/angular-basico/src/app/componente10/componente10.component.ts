import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente10',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente10.component.html',
  styleUrl: './componente10.component.css'
})
export class Componente10Component {

  names: string [] = ["Mariana", "Mariza", "Manuelly", "Maria"];
}
