import { Component, OnInit } from '@angular/core';
import { ShoppingCartFacade } from '../../store/facades/shopping-cart.facade';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from '../models/shopping-cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  basketTotal$: Observable<number>;
  constructor(private shoppingCartFacade: ShoppingCartFacade) {}

  ngOnInit(): void {
    this.basketTotal$ = this.shoppingCartFacade.basketTotal$;
  }
}
