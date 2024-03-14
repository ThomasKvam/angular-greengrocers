import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './list-items/list-items.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListItemsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListItemsComponent
  ]
})
export class ShopModule { }
