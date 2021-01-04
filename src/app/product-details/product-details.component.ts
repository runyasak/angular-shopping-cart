import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/products';
import type { Product } from 'src/interfaces/Product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    const productIdFromRoute = this.route.snapshot.paramMap.get('productId');
    this.product = products.find(product => product.id === Number(productIdFromRoute));
  }

}
