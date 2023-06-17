import { Component, Input } from '@angular/core';
import { cart, cartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private _cart: cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart(): cart {
    return this._cart;
  }
  set cart(cart: cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }


  constructor(private cartService: CartService) {

  }

  getTotal(items: Array<cartItem>): number {
    return this.cartService.getTotal(items)
  }

  onClear() {
    this.cartService.clearCart()
  }
}
