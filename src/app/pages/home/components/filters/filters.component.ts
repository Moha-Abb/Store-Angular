import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {


  @Output() showCategory = new EventEmitter<string>();
  categories: Array<string> | undefined;
  categoriesSubscription: Subscription | undefined;
  constructor(private storeService: StoreService) { }

  onShowCategory(category: string): void {
    this.showCategory.emit(category)
  }
  ngOnInit(): void {

    this.getAllCategories();
  }
  getAllCategories() {

    this.categoriesSubscription = this.storeService.getAllCategories().subscribe((response) => {
      this.categories = response;

    }
    )
  }

  ngOnDestroy(): void {

    this.categoriesSubscription?.unsubscribe()
  }
}
