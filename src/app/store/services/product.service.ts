import { Observable, of } from 'rxjs';
import { productsMock } from '../../mocks/products.mock';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  public getProducts() {
    return of(productsMock);
  }
}
