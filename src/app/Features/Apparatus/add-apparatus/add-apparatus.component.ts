import { Component } from '@angular/core';
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

export class AddApparatusComponent {
  model: AddApparatusRequest;
  private addApparatusSubscription?: Subscription;
  private apparatusTypeSubscription?: Subscription;
  private fuelTypeSubscription?: Subscription;
  private driveTypeSubscription?: Subscription;

  private apparatusType: string = '';
  private fuelType: string = '';
  private driveType: string = '';

  apparatusTypes: ApparatusType[] = [];
  fuelTypes: FuelType[] = [];
  driveTypes: DriveType[] = [];

  constructor(private appService: ApparatusService, private router: Router){
    this.model = new AddApparatusRequest;
    this.getApparatusTypes();
    this.getFuelTypes();
    this.getDriveTypes();
    this.apparatusType = '1';
    this.fuelType = '1';
    this.driveType = '1';
  }

  ngOnDestroy(): void {
    this.addApparatusSubscription?.unsubscribe();
    this.apparatusTypeSubscription?.unsubscribe();
    this.fuelTypeSubscription?.unsubscribe();
    this.driveTypeSubscription?.unsubscribe();
  }

  OnFormSubmit(): void {
    this.model.apparatusTypeId = +this.apparatusType;
    this.model.fueltypeId = +this.fuelType;
    this.model.driveTypeId = +this.driveType;

    this.addApparatusSubscription = this.appService.addApparatus(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/apparatus');
      }
    });
  }

  onTypeSelection(event: Event):void{
    this.apparatusType = (event.target as HTMLSelectElement).value;
  }

  onFuelSelection(event: Event): void {
    this.fuelType = (event.target as HTMLSelectElement).value;
  }

  onDriveSelection(event: Event): void {
    this.driveType = (event.target as HTMLSelectElement).value;
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
    })
  }

  getDriveTypes(): void {
    this.driveTypeSubscription = this.appService.getDriveTypes()
    .subscribe({
      next: (response) => {
        this.driveTypes = response;
      }
    })
  }
}
