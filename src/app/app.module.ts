import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeService } from './recipes/recipe.service';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryItemComponent } from './category/category-list/category-item/category-item.component';
import { CategoryService } from './category/category.service';



@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //attribubes
    ReactiveFormsModule, //reactives
    AppRoutingModule
  ],
  providers: [RecipeService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
