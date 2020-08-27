import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/models/product.model";
import { ProductsFacade } from "../../../store/facades/products.facade";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ShoppingCartFacade } from "src/app/store/facades/shopping-cart.facade";
import { ShoppingCartItem } from "../../../shared/models/shopping-cart.model";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  isLoading$: Observable<boolean>;
  constructor(
    private shoppingCartFacade: ShoppingCartFacade,
    private productsFacade: ProductsFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsFacade.loadProducts();
    this.products$ = this.productsFacade.products$;
    this.isLoading$ = this.productsFacade.isLoading$;
  }

  addToBasket(product: Product) {
    const shoppingCartItem: ShoppingCartItem = {
      product,
      quantity: 1,
    };
    this.shoppingCartFacade.addToBasket(shoppingCartItem);
  }
  sortProducts() {
    this.productsFacade.sortProductsByPrice();
  }
  showDetail(product: Product) {
    this.router.navigate(["/products/product-detail", product.id]);
  }
}
