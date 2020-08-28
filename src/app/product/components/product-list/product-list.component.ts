import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];

  @Output() detail = new EventEmitter<Product>();
  @Output() add = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}
  addToBasket(product: Product) {
    this.add.emit(product);
  }
  showDetail(product: Product) {
    this.detail.emit(product);
  }
}
