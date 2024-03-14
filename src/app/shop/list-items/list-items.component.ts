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
  originalOrder: Item[] = []
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
    this.originalOrder = await this.itemService.getItems()
    console.log(this.originalOrder)

    this.fruits =[]
    this.vegetables= []

    for (let item of this.items) {
      if (item.type === 'vegetable') {
        this.vegetables.push(item);
      } else if (item.type === 'fruit') { 
        this.fruits.push(item);
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
    this.items = this.originalOrder
    console.log(this.items)
    this.showFruits = false
    this.showVegetables = false
    
  }

  sortByPrice(){
    const itemsCopy = [...this.originalOrder]
    itemsCopy.sort((a,b) => a.price - b.price)
    this.items = itemsCopy
  }

  sortByName(){
    const itemsCopy = [...this.originalOrder]
    itemsCopy.sort((a,b) => a.name.localeCompare(b.name))
    this.items = itemsCopy
  }

}
