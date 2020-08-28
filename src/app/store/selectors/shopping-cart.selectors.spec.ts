import * as fromMyReducers from '../reducers/shopping-cart/shopping-cart.reducer';
import { shoppingCarSelectors } from './shopping-cart.selectors';

const createCartState = {
  shoppingCart: {
    items: [
      {
        product: {
          id: 3,
          name: 'Banana',
          detail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          price: 20.0,
          imagePath: 'banana.jpg',
        },
        quantity: 1,
      },
      {
        product: {
          id: 3,
          name: 'Banana',
          detail:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
