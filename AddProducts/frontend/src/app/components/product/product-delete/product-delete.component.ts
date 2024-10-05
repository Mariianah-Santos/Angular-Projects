import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent implements OnInit{

  product!: Product;

  constructor (private router: Router, private productService: ProductService,
    private route: ActivatedRoute
  ) {

  } 

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
      
  }
  deleteProduct(): void {
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMessege("Produto Excluido com Sucesso!");
      this.router.navigate(['/products'])});
    // if (this.product.id !== undefined) {
    //   this.productService.delete(this.product.id).subscribe(() => {
    //     this.productService.showMessege("Produto Excluido com Sucesso!");
    //     this.router.navigate(['/products']);
    //   });
    // } else {
    //   this.productService.showMessege("ID do produto inválido!");
    // }
    // this.productService.delete(this.product.id).subscribe(() => {
    //   this.productService.showMessege("Produto Excluido com Sucesso!");
    //   this.router.navigate(['/products']);
    // })
    // if (this.product && this.product.id) {
    //   this.productService.delete(this.product.id).subscribe(() => {
    //     this.productService.showMessege("Produto excluído com sucesso!");
    //     this.router.navigate(['/products']);
    //   }, (error) => {
    //     // Lógica para tratar erros durante a exclusão
    //     this.productService.showMessege("Erro ao excluir o produto."); // O `true` indica erro, se o método aceitar isso
    //   });
    // } else {
    //   // Exibe uma mensagem de erro se o ID não for válido
    //   this.productService.showMessege("ID do produto não encontrado.");
    // }
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }
} 
