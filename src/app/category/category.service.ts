import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Category } from "../shared/category.model";

Injectable({
    providedIn: 'root'
})
export class CategoryService {

    //property to hold latest changed and to be emitted
    categoriesChanged = new Subject<Category[]>();
    //
    private categories: Category[] = [        

        // new Category(
        //     'KEBAB', 
        //     [new Recipe(
        //         'Small Chicken Kebab',
        //         5, 
        //         'sample data kebab',
        //         'pic.jpg' ),

        //      new Recipe(
        //         'Big chicken Kebab',
        //         8,
        //         'sample of big kebab',
        //         'pic.jpg')
                                               
        //     ],
        // ),

        // new Category(
        //     'PIZZA',
        //     [new Recipe(
        //         'Mageritta',
        //         12,
        //         'sample of data pizza',
        //         'pic.jpg'),
                
                
        //     new Recipe(
        //         'Peperroni',
        //         12,
        //         'sample of data pizza',
        //         'pic.jpg'),

        //     new Recipe(
        //         'Vegetarian',
        //         12,
        //         'sample of data pizza',
        //         'pic.jpg'),    
        //     ]
        // )
    ]
   
     //
     getCategory(index: number){
        return this.categories[index];
     }   
     
     //
     getCategories(){
        return this.categories.slice();
     }

     addCategory(category: Category){
         this.categories.push(category);
         this.categoriesChanged.next(this.categories.slice());
     }
       


}