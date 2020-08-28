import * as fromMyReducers from '../reducers/shopping-cart.reducer';
import { shoppingCarSelectors } from './shopping-cart.selectors';

const createCartState = {
  shoppingCart: {
    items: [
      {
        product: {
          id: 3,
          name: 'Banana',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, .',
          price: 20.0,
          imagePath: 'banana.jpg',
        },
        quantity: 1,
      },
      {
        product: {
          id: 3,
          name: 'Banana',
          detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
          price: 30.5,
          imagePath: 'banana.jpg',
        },
        quantity: 1,
      },
    ],
  },
};
describe('Shopping Cart Selectors', () => {
  it('should return shopping cart items', () => {
    expect(shoppingCarSelectors.getShoppingCartItems(createCartState)).toBe(
      createCartState.shoppingCart.items
    );
  });

  it('should return correct shopping basket total', () => {
    const expectedValue = 50.5;
    expect(shoppingCarSelectors.getShoppingCartTotal(createCartState)).toBe(
      expectedValue
    );
  });
});
