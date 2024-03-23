import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})

export class ItemListComponent implements OnInit{
  items$?: Observable<Item[]>;

  constructor(private itemService: ItemService){}

  ngOnInit(): void {
    this.items$ = this.itemService.getAll();
  }
}
