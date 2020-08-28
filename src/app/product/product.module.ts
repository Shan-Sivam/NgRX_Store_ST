import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductShellComponent } from './containers/product-shell/product-shell.component';
import { ProductListShellComponent } from './containers/product-list-shell/product-list-shell.component';
import { ProductDetailShellComponent } from './containers/product-detail-shell/product-detail-shell.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListSortComponent } from './components/product-list-sort/product-list-sort.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductShellComponent,
    ProductListShellComponent,
    ProductDetailShellComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductListSortComponent,
  ],
  imports: [CommonModule, RouterModule, ProductRoutingModule, SharedModule],
})
export class ProductModule {}
