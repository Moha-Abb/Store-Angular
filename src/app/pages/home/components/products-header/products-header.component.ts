import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() countChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = 'desc';
  itemsShowCount = 12;

  sortUpdated(newSort: string): void {
    this.sort = newSort
    this.sortChange.emit(newSort)

  }
  onItemsUpdated(count: number): void {
    this.itemsShowCount = count
    this.countChange.emit(count)

  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum)
  }
}
