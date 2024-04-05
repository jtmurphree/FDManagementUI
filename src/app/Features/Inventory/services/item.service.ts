import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddItemRequest } from '../models/addItemRequest.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Item } from '../models/item.model';
import { NOTIMP } from 'dns';
import { Category } from '../models/category.model';
import { AddCategoryRequest } from '../models/addCategoryRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Item[]>{
    return this.http.get<Item[]>(`${environment.apiBaseUrl}/api/Items`);
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Items/categories`);
  }

  addItem(model: AddItemRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Items`, model);
  }

  addCategory(model: AddCategoryRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Items/addcategory`, model);
  }
}
