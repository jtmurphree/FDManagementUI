import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, MatButton, MatFormFieldModule,
    MatInputModule, MatSelectModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit, OnDestroy{
  user$?: Observable<User>;
  userId: number;
  constructor(private userService: UserService){
    this.userId = 1;

  }

  ngOnInit(): void {
    this.user$ = this.userService.getUser(this.userId);
  }

  ngOnDestroy(): void {
    
  }
}
