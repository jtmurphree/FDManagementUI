import { Component, OnDestroy } from '@angular/core';
import { AddItemRequest } from '../models/addItemRequest.model';
import { Subscription } from 'rxjs';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Category } from '../models/category.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [RouterModule, FormsModule, RouterLink, NgFor],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnDestroy {
  model: AddItemRequest;
  private addItemSubscription?: Subscription;
  private getCategoriesSubscription?: Subscription;
  categories: Category[] = [];

  constructor(private itemService: ItemService, private router: Router){
    this.model = new AddItemRequest();
    this.model.categoryID = 1;
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.addItemSubscription?.unsubscribe();
    this.getCategoriesSubscription?.unsubscribe();
  }

  OnFormSubmit(): void {
    this.addItemSubscription = this.itemService.addItem(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/items');
      }
    });
  }

  getCategories(): void {
    this.getCategoriesSubscription = this.itemService.getCategories()
    .subscribe({
      next: (response) => {
        this.categories = response;
      }
    })
  }

  onCategorySelection(event: Event):void{
    this.model.categoryID = +(event.target as HTMLSelectElement).value;
  }
}
