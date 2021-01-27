import { Subject } from "rxjs";
import { Menu } from "../shared/menu.model";

export class ShoppingListService {

   menuChanged = new Subject<Menu[]>(); 
    //this allow a current item selected on the shopping list to be edited
    startedEditing = new Subject<number>();
     
   private menus: Menu[] = [
    new Menu('tomatos', 3),
    new Menu('apple', 5)
   ];

   getMenu(index: number){
    return this.menus[index];
   }

   getMenus(){
    return this.menus.slice();
   }

   addMenu(menu: Menu){
    this.menus.push(menu);
    this.menuChanged.next(this.menus.slice());
   }

   addMenus(menus: Menu[]){
    this.menus.push(...menus);
    this.menuChanged.next(this.menus.slice());
   }

   updateMernu(index: number, newMenu: Menu){
    this.menus[index] = newMenu;
    this.menuChanged.next(this.menus.slice());
   }

   deleteMenu(index: number){
    this.menus.splice(index, 1);
    this.menuChanged.next(this.menus.slice());
   }
}