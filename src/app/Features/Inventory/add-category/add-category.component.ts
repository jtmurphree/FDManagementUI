import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/addCategoryRequest.model';
import { Subscription } from 'rxjs';
import { ItemService } from '../services/item.service';
import { Router } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [RouterModule, FormsModule, RouterLink],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy {
  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(private itemService: ItemService, private router: Router){
    this.model = new AddCategoryRequest();
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }

  OnFormSubmit(): void{
    this.addCategorySubscription = this.itemService.addCategory(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/items/categories');
      }
    })
  }
}
