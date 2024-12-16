import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteService } from '../../services/teste.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-componente02',
  templateUrl: './componente02.component.html',
  styleUrl: './componente02.component.css'
})
export class Componente02Component {

  // variavel
  namePortal: string;
  cursos: string[];


  constructor(private testeService: TesteService, private httpClient: HttpClient) {
    this.namePortal = "https://www.youtube.com/watch?v=w5IMCVTtGII&list=RDpPeRkfcJy9U&index=3";
    this.cursos = this.testeService.getLinguagens();
  }
}
