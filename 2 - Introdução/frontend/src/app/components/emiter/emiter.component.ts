import { Component } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrl: './emiter.component.css'
})
export class EmiterComponent {

  myNumber: number = 0;

  onChangenumber(){
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
