import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

  atributo = "Qualquer";

  constructor() {

  }

  ngOnInit(): void {
      
  }
  fazerAlgo(): void {
      console.log("fazendo algo")
  }
}
