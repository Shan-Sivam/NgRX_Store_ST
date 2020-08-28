import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailShellComponent } from './product-detail-shell.component';
import { ShoppingCartFacade } from 'src/app/store/facades/shopping-cart.facade';
import { of } from 'rxjs';
import { ProductsFacade } from 'src/app/store/facades/products.facade';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';

describe('ProductListShellComponent', () => {
  let component: ProductDetailShellComponent;
  let fixture: ComponentFixture<ProductDetailShellComponent>;

  beforeEach(async(() => {
    const shoppingCartFacadeSpy = jasmine.createSpyObj('ShoppingCartFacade', [
      'addToBasket',
    ]);

    const toastServiceSpy = jasmine.createSpyObj('ToastService', ['show']);

    TestBed.configureTestingModule({
      declarations: [ProductDetailShellComponent],
      providers: [
        {
          provide: ShoppingCartFacade,
          useValue: shoppingCartFacadeSpy,
        },
        {
          provide: ProductsFacade,
          useValue: {
            getProductById: () => of([]),
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
        {
          provide: ToastService,
          useValue: toastServiceSpy,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
