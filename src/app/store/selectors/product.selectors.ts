import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReducer from "../reducers/products/products.reducer";
import { ProductState } from "../reducers/products/products.reducer";
import { StoreFeatureNames } from "../enums/store-feature.enum";
import { Observable } from "rxjs";
import { Product } from "src/app/shared/models/product.model";

const getProductState = createFeatureSelector<ProductState>(
  StoreFeatureNames.PRODUCTS
);
const getState = createSelector(getProductState, (state) => state);
const getList = createSelector(getState, fromReducer.selectAll);
const getEntities = createSelector(getState, fromReducer.selectEntities);
const getSort = createSelector(getState, (state) => state.sort);
const getSortedList = createSelector(getList, getSort, (list, sort) => {
  if (sort.order === 1) {
    return list.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  return list.sort((a, b) => (a.price > b.price ? -1 : 1));
});

const getIsLoading = createSelector(getState, (state) => state.isLoading);

export const getProductById1 = (id: string) =>
  createSelector(getEntities, (state) => {
    debugger;
    return state[id];
  });

export const getProductById = (id: string) => {
  return createSelector(getEntities, (entities) => entities[id]);
};
export const productsSelectors = {
  getState,
  getList,
  getIsLoading,
  getSortedList,
  getProductById,
};
