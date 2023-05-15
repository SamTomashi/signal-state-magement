import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'items', component: ItemComponent },
  { path: '',   redirectTo: '/items', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
