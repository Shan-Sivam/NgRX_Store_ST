import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductShellComponent } from './containers/product-shell/product-shell.component';
import { ProductListShellComponent } from './containers/product-list-shell/product-list-shell.component';
import { ProductDetailShellComponent } from './containers/product-detail-shell/product-detail-shell.component';

const routes: Routes = [
  {
    path: '',
    component: ProductShellComponent,
    children: [
      {
        path: '',
        component: ProductListShellComponent,
      },
      {
        path: 'product-detail/:id',
        component: ProductDetailShellComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
