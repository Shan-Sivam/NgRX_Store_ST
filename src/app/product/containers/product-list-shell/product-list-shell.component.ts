import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ShoppingCartFacade } from 'src/app/store/facades/shopping-cart.facade';
import { ProductsFacade } from 'src/app/store/facades/products.facade';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';
import { ShoppingCartItem } from 'src/app/shared/models/shopping-cart.model';

@Component({
  selector: 'app-product-list-shell',
  templateUrl: './product-list-shell.component.html',
  styleUrls: ['./product-list-shell.component.scss'],
})
export class ProductListShellComponent implements OnInit {
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
  onSort(orderBy: string) {
    if (orderBy === 'price') {
      this.productsFacade.sortProductsByPrice();
    } else {
      this.productsFacade.sortProductsByName();
    }
  }

  onShowDetail(product: Product) {
    this.router.navigate(['/products/product-detail', product.id]);
  }
}
