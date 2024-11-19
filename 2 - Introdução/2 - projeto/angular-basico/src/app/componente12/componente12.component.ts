import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {

  // variavel
  name: string = '';
  city: string = '';

}
