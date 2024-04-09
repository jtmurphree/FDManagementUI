import { Component, OnDestroy, OnInit, OutputRefSubscription } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../models/user.model';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ActivatedRoute

 } from '@angular/router';
import { UpdateUserRequest } from '../models/updateUserRequest.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, MatButton, MatFormFieldModule,
    MatInputModule, MatSelectModule, MatCardModule, MatDividerModule, ReactiveFormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit, OnDestroy{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  userId: string | null = null;
  model: User;
  paramsSubscription?: Subscription;
  userSubscription?: Subscription;
  user?: User;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router){
    //this.userId = "1";
    this.model = new User();
  }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) =>{
        this.userId = params.get('id');

        if(this.userId){
          //get user data
          this.userSubscription = this.userService.getUser(this.userId)
          .subscribe({
            next: (response) => {
              this.user = response;
            }
          })
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }

  OnFormSubmit(): void{
    const updateUserRequest: UpdateUserRequest = {
      firstName: this.user?.firstName ?? '',
      lastName: this.user?.lastName ?? '',
      userName: this.user?.userName ?? '',
      displayName: this.user?.displayName ?? '',
      employeeId: this.user?.employeeId ?? '',
      phoneNumber: this.user?.phoneNumber ?? '',
      email: this.user?.email ?? '',
      userRoleName: this.user?.userRoleName ?? '',
      userRoleId: this.user?.userRoleId ?? 0,
      dateAdded: this.user?.dateAdded ?? new Date(),
      dateUpdated: this.user?.dateUpdated ?? undefined
    };

    if(this.userId){
      this.userService.updateUser(this.userId, updateUserRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('admin/users'); //this will change
        }

      })
    }
  }
}
