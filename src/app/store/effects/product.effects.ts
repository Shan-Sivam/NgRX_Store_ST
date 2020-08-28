import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap, delay } from 'rxjs/operators';
import * as ProductActions from '../actions/products.actions';
import { ProductService } from '../services/product.service';
import { Product } from 'src/app/shared/models/product.model';

@Injectable()
export class ProductEffects {
  constructor(
    private productService: ProductService,
    private actions$: Actions
  ) {}

  @Effect()
  loadClaimsSearch$ = this.actions$.pipe(
    ofType<ProductActions.LoadProducts>(ProductActions.ProductActionTypes.LOAD),
    mergeMap((action) => {
      return this.productService.getProducts().pipe(
        delay(100),
        switchMap((data: Product[]) => [
          new ProductActions.LoadProductsSuccess(data),
        ]),
        catchError((err) => {
          return of(new ProductActions.LoadProductsFail(err));
        })
      );
    })
  );
}
