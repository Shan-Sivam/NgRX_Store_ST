import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartItem } from 'src/app/shared/models/shopping-cart.model';
import { ToastService } from 'src/app/shared/toast.service';
import { ShoppingCartFacade } from 'src/app/store/facades/shopping-cart.facade';

@Component({
  selector: 'app-basket-shell',
  templateUrl: './basket-shell.component.html',
  styleUrls: ['./basket-shell.component.scss']
})
export class BasketShellComponent implements OnInit {

  cartItems$: Observable<ShoppingCartItem[]>;
  basketTotal$: Observable<number>;
  quantityCount$: Observable<number>;

  constructor(private shoppingCartFacade: ShoppingCartFacade, public toastService: ToastService) {}

  ngOnInit(): void {
    this.cartItems$ = this.shoppingCartFacade.items$;
    this.basketTotal$ = this.shoppingCartFacade.basketTotal$;
    this.quantityCount$ = this.shoppingCartFacade.quantityCount$; // this.shoppingCartFacade.quantityCount$;
  }

  onRemove(shoppingCartItem: ShoppingCartItem) {
    this.shoppingCartFacade.removeFromBasket(shoppingCartItem);
    const msg = `${shoppingCartItem.product.name} has been removed from cart.`;
    this.toastService.show(msg, {
      classname: 'bg-success text-light',
      delay: 2000,
      autohide: true,
      headertext: 'Shopping Basket',
    });
  }

}
