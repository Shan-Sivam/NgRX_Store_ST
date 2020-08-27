import {
  ProductActions,
  ProductActionTypes,
} from "../../actions/products/products.actions";
import { Product, ProductSort } from "src/app/shared/models/product.model";
import { productsMock } from "src/app/mocks/products.mock";
import { State } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

export interface ProductState extends EntityState<Product> {
  isLoading: boolean;
  isLoaded: boolean;
  error?: string;
  sort: ProductSort;
}
export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.id,
});

export const initialState: ProductState = adapter.getInitialState({
  data: [],
  isLoading: false,
  isLoaded: false,
  sort: {
    key: "price",
    order: 1,
  },
});
export let producSort = {
  key: initialState.sort.key,
  order: initialState.sort.order,
};

export function productsReducer(
  state = initialState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case ProductActionTypes.LOAD:
      return { ...state, isLoading: true };
    case ProductActionTypes.LOAD_SUCCESS:
      return adapter.addAll(action.payload, {
        ...state,
        isLoading: false,
        isLoaded: true,
      });
    case ProductActionTypes.LOAD_FAIL:
      return { ...state, isLoading: false, isLoaded: false };
    case ProductActionTypes.SORT:
      return {
        ...state,
        ...{
          sort: { ...state.sort, ...{ order: state.sort.order === 1 ? 0 : 1 } },
        },
      };
    default:
      return state;
  }
}

export const isLoading = (state: ProductState) => state.isLoading;
export const sortOrder = (state: ProductState) => state.sort;
export const { selectIds, selectEntities, selectAll } = adapter.getSelectors();
