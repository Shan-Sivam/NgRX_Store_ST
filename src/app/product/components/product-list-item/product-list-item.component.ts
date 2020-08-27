import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit {
  @Input() product: Product;
  @Output() productAdded = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  addToBasket(product: Product) {
    this.productAdded.emit(product);
  }
}
