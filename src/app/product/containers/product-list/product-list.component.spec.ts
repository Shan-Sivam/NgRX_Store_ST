import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ShoppingCartFacade } from 'src/app/store/facades/shopping-cart.facade';
import { of } from 'rxjs';
import { ProductsFacade } from 'src/app/store/facades/products.facade';
import { ActivatedRoute, Router } from '@angular/router';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']); // [2]
    const shoppingCartFacadeSpy = jasmine.createSpyObj('ShoppingCartFacade', [
      'addToBasket',
    ]);
    const productsFacadeSpy = jasmine.createSpyObj('ProductsFacade', [
      'sortProductsByPrice',
      'loadProducts',
    ]);
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [
        {
          provide: ShoppingCartFacade,
          useValue: shoppingCartFacadeSpy,
        },
        {
          provide: ProductsFacade,
          useValue: productsFacadeSpy,
        },

        {
          provide: Router,
          useValue: routerSpy,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
