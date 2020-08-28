import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-list-sort',
  templateUrl: './product-list-sort.component.html',
  styleUrls: ['./product-list-sort.component.scss'],
})
export class ProductListSortComponent implements OnInit {
  @Input() sortedBy: string;
  @Output() sort = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  sortProductList(orderBy: string) {
    this.sort.emit(orderBy);
  }
}
