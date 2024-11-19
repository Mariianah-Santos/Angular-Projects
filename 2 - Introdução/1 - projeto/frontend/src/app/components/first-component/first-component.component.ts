import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit{

  name: string = "Mariana";
  age: number = 24;
  job = 'Programaor';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car = {
    name: 'Mercedes',
    year: 2010
  };

  constructor() {

  }

  ngOnInit(): void {
      
  }
}
