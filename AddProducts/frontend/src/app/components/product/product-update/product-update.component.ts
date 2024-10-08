import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit{

  product!: Product;

  constructor(private productService: ProductService, private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    });
  }
  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessege("Produto Atualizado com sucesso!");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
