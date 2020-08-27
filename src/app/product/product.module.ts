import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductShellComponent } from './containers/product-shell/product-shell.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductListItemComponent,
    ProductShellComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
