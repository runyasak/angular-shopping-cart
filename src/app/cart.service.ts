import { Injectable } from '@angular/core';
import type { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { Product } from 'src/interfaces/Product.interface';
import { Shipping } from 'src/interfaces/Shipping.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  addToCart(product: Product): number {
    return this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  getShippingPrices(): Observable<Shipping[]> {
    return this.http.get<Shipping[]>('/assets/shipping.json');
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
}
