import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreFeatureNames } from '../enums/store-feature.enum';
import { ShoppingCartState } from '../reducers/shopping-cart.reducer';

const getShoppingCartState = createFeatureSelector<ShoppingCartState>(
  StoreFeatureNames.SHOPPING_CART
);

const getShoppingCartItems = createSelector(
  getShoppingCartState,
  (state) => state.items
);

const getShoppingCartTotal = createSelector(getShoppingCartState, (state) => {
  return state.items
    .map((item) => item.product.price * item.quantity )  
    .reduce((prev, curr) => prev + curr, 0);
});

const getShoppingCartQuantityCount = createSelector(getShoppingCartState, (state) => {
  
  return state.items
    .map((item) => item.quantity * 1 )  
    .reduce((prev, curr) => prev + curr, 0);
});


export const shoppingCarSelectors = {
  getShoppingCartItems,
  getShoppingCartTotal,
  getShoppingCartQuantityCount
};
