import { Component, OnDestroy } from '@angular/core';
import { AddUserRequest } from '../models/addUserRequest.model';
import { Subscription } from 'rxjs';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnDestroy {
   model: AddUserRequest;
   private addUserSubscription?: Subscription

  constructor(private userService: UserService, private router: Router){
    this.model = {
      firstName: '',
      lastName: '',
      displayName: '',
      employeeId: '',
      phoneNumber: '',
      email: '',
      userRoleID: 2
    }
  }

  ngOnDestroy(): void {
    this.addUserSubscription?.unsubscribe();
  }

  OnFormSubmit(): void{
    this.addUserSubscription = this.userService.addUser(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/users')
      }
    })
  }
}
