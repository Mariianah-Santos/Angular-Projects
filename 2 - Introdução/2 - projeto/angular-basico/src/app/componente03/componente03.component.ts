import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  // variavel de imagem
  imagem: string = '../../assets/img/sun.jpg';

  // Função de alterar imagem
  toggleImg() {
    if (this.imagem === '../../assets/img/sun.jpg') {
      this.imagem = '../../assets/img/noite.jpg';
    } else {
      this.imagem = '../../assets/img/sun.jpg';
    }
  }
}
