import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from 'src/app/shared/models/product.model';
import { ProductSort } from '../../../shared/models/product.model';

export enum ProductActionTypes {
  LOAD = '[Product] Get Product',
  LOAD_SUCCESS = '[Product] Get Product Success',
  LOAD_FAIL = '[Product] Get Product Fail',
  SORT = '[Product] sort product list',
}

export class LoadProducts implements Action {
  public readonly type = ProductActionTypes.LOAD;
}

export class LoadProductsSuccess implements Action {
  public readonly type = ProductActionTypes.LOAD_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class LoadProductsFail implements Action {
  public readonly type = ProductActionTypes.LOAD_FAIL;
  constructor(public error: HttpErrorResponse) {}
}

export class SortProducts implements Action {
  public readonly type = ProductActionTypes.SORT;
}

export type ProductActions =
  | LoadProducts
  | LoadProductsSuccess
  | LoadProductsFail
  | SortProducts;
