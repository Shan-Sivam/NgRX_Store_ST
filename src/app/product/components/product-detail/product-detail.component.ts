import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  @Output() add = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}
  addToBasket(product: Product) {
    this.add.emit(product);
  }
}
