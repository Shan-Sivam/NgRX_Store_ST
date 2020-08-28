import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsFacade } from '../../../store/facades/products.facade';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ShoppingCartFacade } from 'src/app/store/facades/shopping-cart.facade';
import { ShoppingCartItem } from '../../../shared/models/shopping-cart.model';
import { ToastService } from 'src/app/shared/toast.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  isLoading$: Observable<boolean>;
  sortedBy$: Observable<string>;
  constructor(
    private shoppingCartFacade: ShoppingCartFacade,
    private productsFacade: ProductsFacade,
    private router: Router,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.productsFacade.loadProducts();
    this.products$ = this.productsFacade.products$;
    this.sortedBy$ = this.productsFacade.sortedBy$;
    this.isLoading$ = this.productsFacade.isLoading$;
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
  addToBasket(product: Product) {
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
  sortProductByPrice() {
    this.productsFacade.sortProductsByPrice();
  }
  sortProductByName() {
    this.productsFacade.sortProductsByName();
  }
  showDetail(product: Product) {
    this.router.navigate(['/products/product-detail', product.id]);
  }
}
