import { Injectable } from '@angular/core';
import { Apparatus } from '../models/apparatus.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { AddApparatusRequest } from '../models/addApparatusRequest.model';
import { ApparatusType } from '../models/apparatusType.model';
import { FuelType } from '../models/fuelType.model';
import { DriveType } from '../models/driveType.model';

@Injectable({
  providedIn: 'root'
})
export class ApparatusService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Apparatus[]>{
    return  this.http.get<Apparatus[]>(`${environment.apiBaseUrl}/api/Apparatus`);
  }

  addApparatus(model: AddApparatusRequest): Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Apparatus`, model);
  }

  getApparatusTypes(): Observable<ApparatusType[]>{
    return this.http.get<ApparatusType[]>(`${environment.apiBaseUrl}/api/Apparatus/types`);
  }

  getFuelTypes(): Observable<FuelType[]>{
    return this.http.get<FuelType[]>(`${environment.apiBaseUrl}/api/Apparatus/fueltypes`);
  }

  getDriveTypes(): Observable<DriveType[]>{
    return this.http.get<FuelType[]>(`${environment.apiBaseUrl}/api/Apparatus/drivetypes`);
  }
}
