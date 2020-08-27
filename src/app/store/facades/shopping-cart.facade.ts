import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import * as shoppingCart from "../selectors/shopping-cart.selectors";
import * as shoppingCartActions from "../actions/shopping-cart/shopping-cart.actions";
import { ShoppingCartState } from "../reducers/shopping-cart/shopping-cart.reducer";
import { ShoppingCartItem } from "../../shared/models/shopping-cart.model";

@Injectable({
  providedIn: "root",
})
export class ShoppingCartFacade {
  constructor(private store: Store<ShoppingCartState>) {}

  items$ = this.store.select(
    shoppingCart.shoppingCarSelectors.getShoppingCartItems
  );
  basketTotal$ = this.store.select(
    shoppingCart.shoppingCarSelectors.getShoppingCartTotal
  );

  addToBasket(shoppingCartItem: ShoppingCartItem) {
    this.store.dispatch(
      new shoppingCartActions.AddToShoppingCart(shoppingCartItem)
    );
  }
}
