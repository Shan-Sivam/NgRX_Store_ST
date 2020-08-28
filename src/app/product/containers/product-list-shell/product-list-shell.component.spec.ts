import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListShellComponent } from './product-list-shell.component';
import { ShoppingCartFacade } from 'src/app/store/facades/shopping-cart.facade';
import { of } from 'rxjs';
import { ProductsFacade } from 'src/app/store/facades/products.facade';
import { Router } from '@angular/router';

describe('ProductListShellComponent', () => {
  let component: ProductListShellComponent;
  let fixture: ComponentFixture<ProductListShellComponent>;

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
      declarations: [ProductListShellComponent],
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
    fixture = TestBed.createComponent(ProductListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
