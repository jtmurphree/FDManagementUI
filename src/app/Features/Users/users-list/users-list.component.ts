import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
  users$?: Observable<User[]>;

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
    this.users$ = this.userService.getAllusers();
  }
}

