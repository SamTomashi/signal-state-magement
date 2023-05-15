import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items = signal<any[]>([
    {
      name: "shoes",
      price: 345,
      description: "Black shoes"
    },
    {
      name: "trousers",
      price: 200,
      description: "Black jeans"
    }
  ])
  constructor() { }

  addItems(){

  }

  deleteItems(name:string){
    // console.log(this.items())
    this.items.update(items=> items.filter(item => item.name !== name))
  }

  updateItems(){

  }

}
