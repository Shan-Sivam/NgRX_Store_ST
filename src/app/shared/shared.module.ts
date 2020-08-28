import { NgModule } from '@angular/core';
import { ToastComponent } from './toast/toast.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    ToastComponent,
    HeaderComponent,
    LayoutComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [
    ToastComponent,
    HeaderComponent,
    LayoutComponent,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}
