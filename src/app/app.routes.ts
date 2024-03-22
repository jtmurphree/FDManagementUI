import { Routes } from '@angular/router';
import { UsersListComponent } from './Features/Users/users-list/users-list.component';
import { HomeComponent } from './Features/Home/home/home.component';
import { ItemListComponent } from './Features/Inventory/item-list/item-list.component';

export const routes: Routes = [
    {
        path: 'admin/users',
        component: UsersListComponent
    },
    {
        path: 'admin/items',
        component: ItemListComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
