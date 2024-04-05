import { Routes } from '@angular/router';
import { UsersListComponent } from './Features/Users/users-list/users-list.component';
import { HomeComponent } from './Features/Home/home/home.component';
import { ApparatusListComponent } from './Features/Apparatus/apparatus-list/apparatus-list.component';
import { ItemListComponent } from './Features/Inventory/item-list/item-list.component';
import { AddUserComponent } from './Features/Users/add-user/add-user.component';
import { AddApparatusComponent } from './Features/Apparatus/add-apparatus/add-apparatus.component';
import { AddItemComponent } from './Features/Inventory/add-item/add-item.component';
import { RoleListComponent } from './Features/Users/role-list/role-list.component';
import { TypeListComponent } from './Features/Apparatus/type-list/type-list.component';
import { AddTypeComponent } from './Features/Apparatus/add-type/add-type.component';
import { FuelTypeListComponent } from './Features/Apparatus/fuel-type-list/fuel-type-list.component';
import { AddFuelTypeComponent } from './Features/Apparatus/add-fuel-type/add-fuel-type.component';
import { DriveTypeListComponent } from './Features/Apparatus/drive-type-list/drive-type-list.component';
import { AddDriveTypeComponent } from './Features/Apparatus/add-drive-type/add-drive-type.component';
import { CategoryListComponent } from './Features/Inventory/category-list/category-list.component';
import { AddUserRoleComponent } from './Features/Users/add-user-role/add-user-role.component';
import { AddCategoryComponent } from './Features/Inventory/add-category/add-category.component';
import { UserDetailsComponent } from './Features/Users/user-details/user-details.component';

export const routes: Routes = [
    {
        path: 'admin/users/roles',
        component: RoleListComponent
    },
    {
        path: 'admin/users/roles/addrole',
        component: AddUserRoleComponent
    },
    {
        path: 'admin/users/userdetails',
        component: UserDetailsComponent
    },
    {
        path: 'admin/users/adduser',
        component: AddUserComponent
    },
    {
        path: 'admin/apparatus/types',
        component: TypeListComponent
    },
    {
        path: 'admin/apparatus/types/addtype',
        component: AddTypeComponent
    },
    {
        path: 'admin/apparatus/fueltypes',
        component: FuelTypeListComponent
    },
    {
        path: 'admin/apparatus/fueltypes/addfueltype',
        component: AddFuelTypeComponent
    },
    {
        path: 'admin/apparatus/drivetypes',
        component: DriveTypeListComponent
    },
    {
        path: 'admin/apparatus/drivetypes/adddrivetype',
        component: AddDriveTypeComponent
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
        path: 'admin/items/categories/addcategory',
        component: AddCategoryComponent
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
