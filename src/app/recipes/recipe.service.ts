import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Menu } from "../shared/menu.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

 //to inject what is construct in the recipe class
@Injectable({
    providedIn:'root'
})
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Kofte Kebab',6 ,
        'This is simple grill kofta sample',
        'https://cdn.pixabay.com/photo/2020/03/21/18/04/kabab-4954818_1280.jpg', 
         [
            new Menu('salad', 1),
             new Menu('burger sauce', 1)
         ]
        ),
        new Recipe('Steak Kebab', 5 ,
        'This is beef meat sample', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mO0_VqfcYTK5jGNF4rgMFIbTisXl7nfJMQ&usqp=CAU', 
        [
            new Menu('all salad', 1),
            new Menu('peter bread', 2),
            new Menu('yogourt', 2)
        ] 
        ),
        new Recipe('Mozarella Pizza',4.5 ,
        'This is cheese pizza sample', 
        'https://cdn.pixabay.com/photo/2017/12/05/20/08/pizza-3000273__340.jpg', 
        [
            new Menu('french fries', 20),
            new Menu('all salad', 2),
            new Menu('donner', 2)
        ]
        )
    ];

    /**
     *
     */
    constructor(private shoppingListService: ShoppingListService) {
        
        
    }

    //get a single elemnt of the recipe
    getRecipe(index: number){
        return this.recipes[index];   
    }

    //get a new copy of the recipes array
    getRecipes(){
        return this.recipes.slice();
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1),
        this.recipesChanged.next(this.recipes.slice());
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    addMenusToShoppingList(menus: Menu[]){
        this.shoppingListService.addMenus(menus);
    }
}