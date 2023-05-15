import { Component } from '@angular/core';
import { ItemService } from '../services/item/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  items = this.itemService.items

  constructor(private itemService: ItemService){

  }
  deleteItem(name:any){
    // console.log(this.items)
    this.itemService.deleteItems(name)
  }
}
