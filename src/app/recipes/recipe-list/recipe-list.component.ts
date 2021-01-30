import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 //coming from the model, this is a recipes of type array of recipe but empty 
  recipes: Recipe[] = [];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
    private router: Router,
     private route: ActivatedRoute) { }  

     ngOnInit(): void {
      // store in the subscription property the listen the new changes made
      this.subscription = this.recipeService.recipesChanged.subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      );
      this.recipes = this.recipeService.getRecipes();
    } 

  onNewRecipe(){
    //use this router to navigate to target the path (which is 'new') I want to go to ..
    //bear in mind we are currently in the recipe-list
    this.router.navigate(['new'], {relativeTo: this.route})
  }

    //to prevent memory leaks
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
