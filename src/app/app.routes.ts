import { Routes } from '@angular/router';
import { UsersListComponent } from './Features/Users/users-list/users-list.component';
import { HomeComponent } from './Features/Home/home/home.component';
import { ApparatusListComponent } from './Features/Apparatus/apparatus-list/apparatus-list.component';
import { ItemListComponent } from './Features/Inventory/item-list/item-list.component';
import { AddUserComponent } from './Features/Users/add-user/add-user.component';
import { AddApparatusComponent } from './Features/Apparatus/add-apparatus/add-apparatus.component';
import { AddItemComponent } from './Features/Inventory/add-item/add-item.component';
import { RoleListComponent } from './Features/Users/role-list/role-list.component';
import { CategoryListComponent } from './Features/Inventory/category-list/category-list.component';

export const routes: Routes = [
    {
        path: 'admin/users/roles',
        component: RoleListComponent
    },
    {
        path: 'admin/users/adduser',
        component: AddUserComponent
    },
    {
        path: 'admin/apparatus/addapparatus',
        component: AddApparatusComponent
    },
    {
        path: 'admin/items/additem',
        component: AddItemComponent
    },
    {
        path: 'admin/items/categories',
        component: CategoryListComponent
    },
    {
        path: 'admin/users',
        component: UsersListComponent
    },
    {
        path: 'admin/apparatus',
        component: ApparatusListComponent
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
