import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    product: '',
    price:0
  };


  constructor(private productService:ProductService, private router: Router) { } //aqui chamamos a service tipando um titulo com a service em si

  
  ngOnInit(): void {}

  createProduct():void {
    this.productService.insereNoBackend(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(["/products"])      
    });
  }

  cancel():void {
    this.router.navigate(["/products"]);

  }

}
