import { Product } from '../shared/models/product.model';

export const productsMock: Product[] = [
  {
    id: 1,
    name: 'Orange',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ',
    price: 11.0,
    imagePath: 'orange.jpg',
  },
  {
    id: 2,
    name: 'Apple',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ',
    price: 21.0,
    imagePath: 'apple.jpg',
  },
  {
    id: 3,
    name: 'Banana',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ',
    price: 1.0,
    imagePath: 'banana.jpg',
  },
];
