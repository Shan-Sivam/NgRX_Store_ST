import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { ShoppingCartFacade } from 'src/app/store/facades/shopping-cart.facade';
import { ProductsFacade } from 'src/app/store/facades/products.facade';
import { ActivatedRoute } from '@angular/router';
import { of, Observable } from 'rxjs';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let shoppingCartFacade: ShoppingCartFacade;
  let productsFacade: ProductsFacade;
  let route: ActivatedRoute;
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailComponent],
      providers: [
        {
          provide: ShoppingCartFacade,
          useValue: {
            basketTotal$: of(1),
          },
        },
        {
          provide: ProductsFacade,
          useValue: {
            getProductById: () => of([]),
          },
        },
        {
          provide: Location,
          useValue: {
            back: () => of([]),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 1, // represents the bookId
              },
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
