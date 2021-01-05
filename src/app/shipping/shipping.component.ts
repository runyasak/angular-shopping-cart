import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { Shipping } from 'src/interfaces/Shipping.interface';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts: Observable<Shipping[]> = new Observable<Shipping[]>();

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
