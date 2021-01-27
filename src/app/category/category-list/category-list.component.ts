import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
//
categories: Category[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  onAddCategory(event){
    this.categoryService.addCategory(event);
  }

}
