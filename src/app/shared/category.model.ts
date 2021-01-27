import { Recipe } from "../recipes/recipe.model";
import { Menu } from "./menu.model";

export class Category {
  public name: string;
  public recipes: Recipe[];
 // public menus: Menu[]
  
  constructor(name: string, recipes: Recipe[]){
    this.name = name;
    this.recipes = recipes
    //this.menus = menus
  }
}