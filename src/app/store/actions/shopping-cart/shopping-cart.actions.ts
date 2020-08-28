import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { ShoppingCartItem } from '../../../shared/models/shopping-cart.model';

export enum ShoppingCartActionTypes {
  Add = '[ Shopping Cart ] Add to  shopping cart',
  Remove = '[ Shopping Cart ] Remove from  shopping cart',
}

export class AddToShoppingCart implements Action {
  public readonly type = ShoppingCartActionTypes.Add;
  constructor(public payload: ShoppingCartItem) {}
}

export class RemoveFromShoppingCart implements Action {
  public readonly type = ShoppingCartActionTypes.Remove;
  constructor(public payload: ShoppingCartItem) {}
}

export type ShoppingCartActions = AddToShoppingCart | RemoveFromShoppingCart;
