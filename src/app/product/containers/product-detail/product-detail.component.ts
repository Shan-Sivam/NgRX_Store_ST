import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsFacade } from 'src/app/store/facades/products.facade';
import { map, take } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ShoppingCartItem } from 'src/app/shared/models/shopping-cart.model';
import { ShoppingCartFacade } from 'src/app/store/facades/shopping-cart.facade';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productId: string;
  constructor(
    private shoppingCartFacade: ShoppingCartFacade,
    private productsFacade: ProductsFacade,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.productsFacade
      .getProductById(this.productId)
      .pipe(take(1))
      .subscribe((data: Product) => {
        if (data) {
          this.product = data;
        }
      });
  }
  goBack() {
    this.location.back();
  }

  addToBasket(product: Product) {
    const shoppingCartItem: ShoppingCartItem = {
      product,
      quantity: 1,
    };
    this.shoppingCartFacade.addToBasket(shoppingCartItem);
  }
}
