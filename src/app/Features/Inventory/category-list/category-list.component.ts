import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{
  categories$?: Observable<Category[]>;

  constructor(private itemService: ItemService){

  }

  ngOnInit(): void {
    this.categories$ = this.itemService.getCategories()
  }
}
