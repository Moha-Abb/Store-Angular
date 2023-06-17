import { Component, OnInit } from '@angular/core';
import { cart, cartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: cart = {
    items: [
      {
        name: '',
        product: '',
        price: 2,
        id: 5,
        quantity: 5
      },
      {
        name: '',
        product: '',
        price: 2,
        id: 5,
        quantity: 5
      }
    ]
  }
  dataSource: Array<cartItem> = []
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items

    })
  }

  getTotal(items: Array<cartItem>): number {
    return this.cartService.getTotal(items)
  }

  onClearCart(): void {

    this.cartService.clearCart();
  }
  onRemoveFromCart(item: cartItem): void {

    this.cartService.removeFromCart(item);
  }
  onAddQuantity(item: cartItem): void {

    this.cartService.addToCart(item);
  }
  onRemoveQuantity(item: cartItem): void {

    this.cartService.removeQuantity(item);
  }
}
