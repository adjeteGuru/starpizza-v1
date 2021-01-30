import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryDetailComponent } from "./category/category-detail/category-detail.component";
import { CategoryEditComponent } from "./category/category-edit/category-edit.component";
import { CategoryListComponent } from "./category/category-list/category-list.component";
import { CategoryStartComponent } from "./category/category-start/category-start.component";
import { CategoryComponent } from "./category/category.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { OrdersComponent } from "./orders/orders.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
     //only redirect if pathMatch is emplty
     {path: 'home', component: HomeComponent, children: [
         {path: '', component: HomeComponent}
     ]},


    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},        
        {path: ':id/edit', component: RecipeEditComponent}       
    ]},   
  
    {path: 'categories', component: CategoryComponent, children: [
        {path: '', component: CategoryStartComponent},
        {path: 'new', component: CategoryEditComponent},
        {path: 'id', component: CategoryDetailComponent},
        {path: ':id/edit', component: CategoryEditComponent}
    ]},

    {path: 'orders', component: OrdersComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {

}