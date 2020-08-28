import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { Subject } from 'rxjs';
import { ShoppingCartFacade } from 'src/app/store/facades/shopping-cart.facade';
import { ProductsFacade } from 'src/app/store/facades/products.facade';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';
import { takeUntil } from 'rxjs/operators';
import { ShoppingCartItem } from 'src/app/shared/models/shopping-cart.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-detail-shell',
  templateUrl: './product-detail-shell.component.html',
  styleUrls: ['./product-detail-shell.component.scss'],
})
export class ProductDetailShellComponent implements OnInit, OnDestroy {
  product: Product;
  productId: string;
  destroyed$ = new Subject<void>();
  constructor(
    private shoppingCartFacade: ShoppingCartFacade,
    private productsFacade: ProductsFacade,
    private route: ActivatedRoute,
    private location: Location,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.productsFacade
      .getProductById(this.productId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: Product) => {
        if (data) {
          this.product = data;
        } else {
          this.productsFacade.loadProducts();
        }
      });
  }
  goBack() {
    this.location.back();
  }

  removeFromBasket(product: Product) {
    const shoppingCartItem: ShoppingCartItem = {
      product,
      quantity: 1,
    };
    this.shoppingCartFacade.removeFromBasket(shoppingCartItem);

    const msg = `${product.name} fruit removed to shopping basket.`;
    this.toastService.show(msg, {
      classname: 'bg-info text-light',
      delay: 2000,
      autohide: true,
      headertext: 'Shopping Basket',
    });
  }
  onAdd(product: Product) {
    const shoppingCartItem: ShoppingCartItem = {
      product,
      quantity: 1,
    };
    this.shoppingCartFacade.addToBasket(shoppingCartItem);

    const msg = `${product.name} fruit added to shopping basket.`;
    this.toastService.show(msg, {
      classname: 'bg-success text-light',
      delay: 2000,
      autohide: true,
      headertext: 'Shopping Basket',
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
}
