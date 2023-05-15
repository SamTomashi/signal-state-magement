import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { ItemService } from '../services/item/item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService, private itemService: ItemService){

  }
  items = this.itemService.items;
  ngOnInit(): void {
    console.log(this.items())
  }

}
