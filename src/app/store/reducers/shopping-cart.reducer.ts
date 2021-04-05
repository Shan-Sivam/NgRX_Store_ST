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
      

      const newData = state.items.map(obj => {
        if(obj.product.id  === action.payload.product.id) // check if product already exists 
           return {
             ...obj,
             quantity: obj.quantity + 1
           }
        return obj
      });
      
      const index = state.items.findIndex(item => item.product.id == action.payload.product.id);
      
      console.log(index);

      if(index == -1) {
        return {
          ...state,
          ...{ items: [...state.items, action.payload] },
        };  
      }

      return {
        ...state,
        ...{items : newData}
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
