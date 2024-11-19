import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente07',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente07.component.html',
  styleUrl: './componente07.component.css'
})
export class Componente07Component {

  // Variavel logica
  condicao: boolean = false;
  // condicao: boolean = true;

  // Lista de aprovados

  lista: string [] = ["Aprovado", "Reprovado", "Aprovado"];
}
