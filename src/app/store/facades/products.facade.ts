import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as products from '../selectors/product.selectors';
import { ProductState } from '../reducers/products/products.reducer';
import * as productActions from '../actions/products/products.actions';
import { ProductSort, Product } from '../../shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsFacade {
    constructor(private store: Store<ProductState>) { }

    isLoading$ = this.store.select(products.productsSelectors.getIsLoading);
    products$ = this.store.select(products.productsSelectors.getSortedList);

    loadProducts() {
        this.store.dispatch(new productActions.LoadProducts());
    }
    sortProductsByPrice() {
        this.store.dispatch(new productActions.SortProducts());
    }

    getProductById(id: string) {
        debugger
        return this.store.select(products.productsSelectors.getProductById(id))
    }
}
