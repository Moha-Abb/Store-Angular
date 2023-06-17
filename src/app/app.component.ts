import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { cart } from './models/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cart: cart = { items: [] }
  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart
    })

  }

}
