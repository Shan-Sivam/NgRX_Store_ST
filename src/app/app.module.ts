import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './store/reducers/products.reducer';
import { shoppingCartReducer } from './store/reducers/shopping-cart.reducer';
import { ProductEffects } from './store/effects/product.effects';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';

export const EFFECTS: any[] = [ProductEffects];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductModule,
    StoreModule.forRoot({
      products: productsReducer,
      shoppingCart: shoppingCartReducer,
    }),
    EffectsModule.forRoot(EFFECTS),
    StoreDevtoolsModule.instrument({
      maxAge: 15, // Retains last 15 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
