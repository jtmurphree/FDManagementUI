import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { User } from '../models/user.model';
import { AddUserRequest } from '../models/addUserRequest.model';
import { UserRole } from '../models/userRole.model';
import { AddUserRoleRequest } from '../models/addUseRoleRequest.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllusers(): Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiBaseUrl}/api/User`);
  }

  getUser(id: number, user: User): Observable<User>{
    return this.http.put<User>(`${environment.apiBaseUrl}/api/User/${id}`, user);
  }

  addUser(model: AddUserRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/User`, model);
  }

  getUserRoles(): Observable<UserRole[]>{
    return this.http.get<UserRole[]>(`${environment.apiBaseUrl}/api/User/roles`);
  }

  addUserRole(model: AddUserRoleRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/User/createuserrole`, model);
  } 
}
