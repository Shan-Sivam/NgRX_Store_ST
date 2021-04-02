import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BasketShellComponent } from './containers/basket-shell.component';
import { BasketComponent } from './components/basket.component';
import { BasketRoutingModule } from './basket-routing.module';

@NgModule({
  declarations: [
    BasketShellComponent,
    BasketComponent
  ],
  imports: [CommonModule, RouterModule, BasketRoutingModule,  SharedModule],
})
export class BasketModule {}
