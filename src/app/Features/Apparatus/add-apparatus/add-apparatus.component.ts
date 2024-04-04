import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddApparatusRequest } from '../models/addApparatusRequest.model';
import { Subscription } from 'rxjs';
import { ApparatusService } from '../Services/apparatus.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ApparatusType } from '../models/apparatusType.model';
import { DriveType } from '../models/driveType.model';
import { FuelType } from '../models/fuelType.model';

@Component({
  selector: 'app-add-apparatus',
  standalone: true,
  imports: [RouterLink, FormsModule, NgFor],
  templateUrl: './add-apparatus.component.html',
  styleUrl: './add-apparatus.component.css'
})

export class AddApparatusComponent implements OnDestroy{
  model: AddApparatusRequest;
  private addApparatusSubscription?: Subscription;
  private apparatusTypeSubscription?: Subscription;
  private fuelTypeSubscription?: Subscription;
  private driveTypeSubscription?: Subscription;

  apparatusTypes: ApparatusType[] = [];
  fuelTypes: FuelType[] = [];
  driveTypes: DriveType[] = [];

  constructor(private appService: ApparatusService, private router: Router){
    this.model = new AddApparatusRequest;
    this.model.apparatusTypeId = 1;
    this.model.fuelTypeId = 1;
    this.model.driveTypeId = 1;
    this.getApparatusTypes();
    this.getFuelTypes();
    this.getDriveTypes();
  }

  ngOnDestroy(): void {
    this.addApparatusSubscription?.unsubscribe();
    this.apparatusTypeSubscription?.unsubscribe();
    this.fuelTypeSubscription?.unsubscribe();
    this.driveTypeSubscription?.unsubscribe();
  }

  OnFormSubmit(): void {
    
    this.addApparatusSubscription = this.appService.addApparatus(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/apparatus');
      }
    });
  }

  onTypeSelection(event: Event):void{
    this.model.apparatusTypeId = +(event.target as HTMLSelectElement).value;
  }

  onFuelSelection(event: Event): void {
    this.model.fuelTypeId = +(event.target as HTMLSelectElement).value;
  }

  onDriveSelection(event: Event): void {
    this.model.driveTypeId = +(event.target as HTMLSelectElement).value;
  }

  getApparatusTypes(): void {
    this.apparatusTypeSubscription = this.appService.getApparatusTypes()
    .subscribe({
      next: (response) => {
        this.apparatusTypes = response;
      }          
    });
  }

  getFuelTypes(): void {
    this.fuelTypeSubscription = this.appService.getFuelTypes()
    .subscribe({
      next: (response) => {
        this.fuelTypes = response;
      }
    });
  }

  getDriveTypes(): void {
    this.driveTypeSubscription = this.appService.getDriveTypes()
    .subscribe({
      next: (response) => {
        this.driveTypes = response;
      }
    });
  }
}
