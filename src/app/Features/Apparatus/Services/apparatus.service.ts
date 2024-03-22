import { Injectable } from '@angular/core';
import { Apparatus } from '../models/apparatus.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApparatusService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Apparatus[]>{
    return  this.http.get<Apparatus[]>(`${environment.apiBaseUrl}/api/Apparatus`)
  }
}
