import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import type { FormGroup } from '@angular/forms';
import { CartService } from 'src/app/cart.service';
import type { Customer } from 'src/interfaces/Customer.interface';
import type { Product } from 'src/interfaces/Product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  checkoutForm?: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData: Customer): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm?.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
