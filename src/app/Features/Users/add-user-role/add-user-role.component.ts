import { Component, OnDestroy } from '@angular/core';
import { AddUserRoleRequest } from '../models/addUseRoleRequest.model';
import { Subscription } from 'rxjs';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user-role',
  standalone: true,
  imports: [RouterModule, FormsModule, RouterLink],
  templateUrl: './add-user-role.component.html',
  styleUrl: './add-user-role.component.css'
})
export class AddUserRoleComponent implements OnDestroy{
  model: AddUserRoleRequest;
  private addRoleSubscription?: Subscription;

  constructor(private userService: UserService, private router: Router){
    this.model = new AddUserRoleRequest();
  }

  ngOnDestroy(): void {
    this.addRoleSubscription?.unsubscribe();
  }

  OnFormSubmit(): void {
    this.addRoleSubscription = this.userService.addUserRole(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/users/roles');
      }
    })
  }
}
