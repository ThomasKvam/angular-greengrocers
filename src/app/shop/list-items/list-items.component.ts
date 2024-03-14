import { Component, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  items: any
  constructor(private itemService: ItemService){}

  ngOnInit(){
    this.renderStore()
  }

  renderStore(){
    this.items = this.itemService.getItems()
  }

  addItemToCart(item: Item){
    this.itemService.addToCart(item)
  }

}
