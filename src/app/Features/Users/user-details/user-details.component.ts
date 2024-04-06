import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

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
  user$?: Observable<User>;
  userId: number;
  model: User;
  constructor(private userService: UserService){
    this.userId = 1;
    this.model = new User();
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUser(this.userId);
  }

  ngOnDestroy(): void {
    
  }

  OnFormSubmit(): void{

  }
}
