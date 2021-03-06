import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from '../reducers/products.reducer';
import { ProductState } from '../reducers/products.reducer';
import { StoreFeatureNames } from '../enums/store-feature.enum';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ShoppingCartState } from '../reducers/shopping-cart.reducer';

const getProductState = createFeatureSelector<ProductState>(
  StoreFeatureNames.PRODUCTS
);
const getShoppingCartState = createFeatureSelector<ShoppingCartState>(
  StoreFeatureNames.SHOPPING_CART
);
const getShoppingCartItems = createSelector(
  getShoppingCartState,
  (state) => state.items
);
const getState = createSelector(getProductState, (state) => state);
const getList = createSelector(getState, fromReducer.selectAll);
const getEntities = createSelector(getState, fromReducer.selectEntities);
const getSort = createSelector(getState, (state) => state.sort);
const getSortedList = createSelector(
  getList,
  getSort,
  getShoppingCartItems,
  (list, sort, basketItems) => {
    let result: Product[] = [];
    if (sort.key === 'name') {
      result = list.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else {
      result = list.sort((a, b) => (a.price > b.price ? 1 : -1));
    }
    return result;
  }
);

const getIsLoading = createSelector(getState, (state) => state.isLoading);
const getSortedBy = createSelector(getState, (state) => state.sort.key);

export const getProductById = (id: string) => {
  return createSelector(
    getEntities,
    getShoppingCartItems,
    (entities, basketItems) => {
      const item = entities[id];
      if (item) {
        if (basketItems.find((x) => x.product.id === item.id)) {
          return { ...item, ...{ added: true } };
        } else {
          return { ...item, ...{ added: false } };
        }
      }
    }
  );
};
export const productsSelectors = {
  getState,
  getList,
  getIsLoading,
  getSortedList,
  getProductById,
  getSortedBy,
};
