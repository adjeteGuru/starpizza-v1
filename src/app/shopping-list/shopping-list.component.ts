import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Menu } from '../shared/menu.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
menus: Menu[];

 private subscription: Subscription;

  constructor(private shoppingService: ShoppingListService) { }
 

  ngOnInit(): void {
    this.menus = this.shoppingService.getMenus();
    this.subscription = this.shoppingService.menuChanged.subscribe(
      (menus: Menu[]) => {
        this.menus = menus;
      }
    );
  }

  onEditItem(index: number){
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
