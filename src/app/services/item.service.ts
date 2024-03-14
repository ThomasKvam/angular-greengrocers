import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Item } from '../models/item';
import { first, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  http = inject(HttpClient)
  private items: Item[] = []
  private cart: Item[] = []
  total: number = 0

  async getItems(): Promise<Item[]>{
    const result = await firstValueFrom(this.http.get(`${environment.apiUrl}groceries`))
    //@ts-ignore
    this.items = result
    console.log(this.items)
    return this.items
  }

  async getCart(): Promise<Item[]> {
    return this.cart
  }

  async addToCart(item: Item){
    const itemExists = this.cart.find((cartItem) => cartItem.id === item.id)
    if(itemExists){
      itemExists.quantity++
    }
    else{
      item.quantity = 1
      this.cart.push(item)
    }
    this.calculateTotal()
    console.log(this.cart)
  }

  async decrease(item: Item){
    const itemIndex = this.cart.findIndex((cartItem) => cartItem.id === item.id)
    if(itemIndex > -1){
      this.cart[itemIndex].quantity--

      if(this.cart[itemIndex]?.quantity === 0){
        this.cart.splice(itemIndex, 1)
      }
      this.calculateTotal()
    } 
  }

  async increase(item: Item){
    const itemIndex = this.cart.findIndex((cartItem) => cartItem.id === item.id)
    if(itemIndex > -1){
      this.cart[itemIndex].quantity++
      this.calculateTotal()
    }
  }

  calculateTotal(): number{
    this.total = 0
    for(let item of this.cart){
      this.total += item.price*item.quantity
    }
    console.log(this.total)
    return this.total
  }

  constructor() { }
}
