import { Injectable } from '@angular/core';
import { Product } from 'src/interfaces/Product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() { }

  addToCart(product: Product): number {
    return this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
}
