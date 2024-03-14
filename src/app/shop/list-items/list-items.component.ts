import { Component, inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  items: Item[] = []
  vegetables: Item[] = []
  fruits: Item[] = []
  showVegetables: boolean = false
  showFruits: boolean = false

  constructor(private itemService: ItemService){}

 ngOnInit(){
    this.renderStore()
  }

 async renderStore(){
    this.items = await this.itemService.getItems()
    this.fruits =[]
    this.vegetables= []

    for (let item of this.items) {
      if (item.type === 'vegetable') {
        this.vegetables.push(item);
        console.log(this.vegetables);
      } else if (item.type === 'fruit') { 
        this.fruits.push(item);
        console.log(this.fruits);
    }
  }
  }

  addItemToCart(item: Item){
    this.itemService.addToCart(item)
  }

  sortByVegetables(){
    this.showFruits = false
    this.showVegetables = true
    
  }
  sortByFruit(){
    this.showFruits = true
    this.showVegetables = false
  }
  showAll(){
    this.showFruits = false
    this.showVegetables = false
  }

}
