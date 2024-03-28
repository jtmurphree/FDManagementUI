import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { UserRole } from '../models/userRole.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css'
})
export class RoleListComponent implements OnInit{
  userRoles$?: Observable<UserRole[]>;

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
    this.userRoles$ = this.userService.getUserRoles();
  }
}
