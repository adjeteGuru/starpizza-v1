import { Injectable } from "@angular/core";
import { Order } from "../shared/order.model";
import { Recipe } from "./recipe.model";

 //to inject what is construct in the recipe class
@Injectable({
    providedIn:'root'
})
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Kofte Kebab',6 ,
        'This is simple grill kofta sample',
        'https://cdn.pixabay.com/photo/2020/03/21/18/04/kabab-4954818_1280.jpg', 
        [
            new Order('salad', 1),
            new Order('burger sauce', 1)
        ]),
        new Recipe('Steak Kebab', 5 ,
        'This is beef meat sample', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mO0_VqfcYTK5jGNF4rgMFIbTisXl7nfJMQ&usqp=CAU', 
        [
            new Order('all salad', 1),
            new Order('peter bread', 2),
            new Order('yogourt', 2)
        ]),
        new Recipe('Mozarella Pizza',4.5 ,
        'This is cheese pizza sample', 
        'https://cdn.pixabay.com/photo/2017/12/05/20/08/pizza-3000273__340.jpg', 
        [
            new Order('french fries', 20),
            new Order('all salad', 2),
            new Order('donner', 2)
        ])
    ];

    //get a single elemnt of the recipe
    getRecipe(index: number){
     return this.recipes[index];   
    }

    //get a new copy of the recipes array
    getRecipes(){
        return this.recipes.slice();
    }
}