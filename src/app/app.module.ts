import { NgModule, TemplateRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ShopModule } from './shop/shop.module';
import { CartModule } from './cart/cart.module';
import { TotalModule } from './total/total.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    HttpClientModule, 
    CommonModule, 
    ShopModule, 
    CartModule,
    TotalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
