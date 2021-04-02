import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartItem } from 'src/app/shared/models/shopping-cart.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  @Input() items: ShoppingCartItem[];

  constructor() { }

  ngOnInit(): void {
  }

}
