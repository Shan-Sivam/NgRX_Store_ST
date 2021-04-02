import {
  ShoppingCartActions,
  ShoppingCartActionTypes,
} from '../actions/shopping-cart.actions';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart.model';
import { ShoppingCartItem } from '../../shared/models/shopping-cart.model';

export interface ShoppingCartState {
  items: ShoppingCartItem[];
}
const initialState: ShoppingCartState = {
  items: [],
};


export function shoppingCartReducer(
  state = initialState,
  action: ShoppingCartActions
): ShoppingCartState {
  switch (action.type) {
    case ShoppingCartActionTypes.Add: {
      if(!state.items.findIndex(item => item.product.id == action.payload.product.id)) {
        // Update Item
        return {
          ...state,
          ...{ items: [...state.items, action.payload] },
        };  
      }
      
      return {
        ...state,
        ...{ items: [...state.items, action.payload] },
      };
    }
    case ShoppingCartActionTypes.Remove: {
      return {
        ...state,
        ...{
          items: state.items.filter(
            (i) => i.product.id !== action.payload.product.id
          ),
        },
      };
    }
    default:
      return state;
  }
}
