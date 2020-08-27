import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProductShellComponent } from './containers/product-shell/product-shell.component';

const routes: Routes = [
  {
    path: '',
    component: ProductShellComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'product-detail/:id',
        component: ProductDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
