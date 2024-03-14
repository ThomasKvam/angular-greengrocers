import { Component, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  itemService = inject(ItemService)
  cart = this.itemService.getCart()

  decreaseQuantity(item: Item){
    this.itemService.decrease(item)
  }
  increaseQuantity(item: Item){
    this.itemService.increase(item)
  }
  
}
