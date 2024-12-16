import { Component } from '@angular/core';


@Component({
  selector: 'app-componente03',
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  url: string = "LINK";

  cursoAngular: boolean = false;

  urlImgem = 'https://cdn.oneesports.gg/cdn-data/2024/11/Arcane_Season2_Episode3_Caitlyn_Longshot-1024x576.jpg';

  txt: boolean = false;
  constructor() {

  }
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  btnClick() {
    this.txt = !this.txt;
  }


}
