import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketShellComponent } from './containers/basket-shell.component';

const routes: Routes = [
  {
    path: '',
    component: BasketShellComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketRoutingModule {}
