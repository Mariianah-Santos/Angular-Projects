import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListserviceService } from '../../services/listservice.service';
import { ListProduct } from '../../ListProduct';


@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrl: './list-create.component.css'
})
export class ListCreateComponent {

  listProducts: ListProduct = { // criado para pegar as propriedades da interface que vai guardar os dados
    title: '',
    subtitle: ['']
  }

  constructor(private router: Router, private listService: ListserviceService){

  }

  addItem(): void { // adicionar mais um input 
    this.listProducts.subtitle.push('');
  }

  trackByIndex(index: number, item: any): number { //  Esse método permite que o Angular rastreie cada item no loop *ngFor pelo índice. Isso melhora o desempenho e evita problemas de atualização da interface.
    return index;
  }

  addProduct(): void { // manda os dados digitados para o banco e armazena
    this.listService.createProduct(this.listProducts).subscribe(() => {
      this.router.navigate(['/']); // vai navegar para o home
    });
  }

  cancel(): void { // cancelar operação
    this.router.navigate(['/']);
  }
}
