import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from 'src/app/shared/models/shopping-cart.model';
import { ShoppingCartFacade } from 'src/app/store/facades/shopping-cart.facade';

@Component({
  selector: 'app-basket-shell',
  templateUrl: './basket-shell.component.html',
  styleUrls: ['./basket-shell.component.scss']
})
export class BasketShellComponent implements OnInit {

  cartItems$: Observable<ShoppingCartItem[]>;

  constructor(private shoppingCartFacade: ShoppingCartFacade) {}

  ngOnInit(): void {
    this.cartItems$ = this.shoppingCartFacade.items$;
  }

}
