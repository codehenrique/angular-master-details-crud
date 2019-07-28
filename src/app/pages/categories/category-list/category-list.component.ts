import { Component, OnInit } from '@angular/core';

import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private CategoryService: CategoryService) { }

  ngOnInit() {
    this.CategoryService.getAll().subscribe(
      categories => {
        this.categories = categories
      },
      error => {
        alert(`Erro ao carregar a lista! ${error}`);
      }
    );
  }

}
