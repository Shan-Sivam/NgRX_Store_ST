import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingCartItem } from 'src/app/shared/models/shopping-cart.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  @Input() items: ShoppingCartItem[];
  @Input() total: number;
  @Input() totalQuantity: number;

  @Output() remove = new EventEmitter<ShoppingCartItem>();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(shoppingCartItem: ShoppingCartItem) {
    this.remove.emit(shoppingCartItem);
  }
}
