import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {

  @Input() fullWithMode = false;
  @Input() product: Product | undefined;
  @Output() onToCart = new EventEmitter();
  onAddToCart(): void {
    this.onToCart.emit(this.product)
  }
}
