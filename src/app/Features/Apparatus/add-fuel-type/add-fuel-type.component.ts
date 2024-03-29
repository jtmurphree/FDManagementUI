import { Component, OnDestroy } from '@angular/core';
import { ApparatusService } from '../Services/apparatus.service';
import { FuelType } from '../models/fuelType.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fuel-type',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './add-fuel-type.component.html',
  styleUrl: './add-fuel-type.component.css'
})
export class AddFuelTypeComponent implements OnDestroy{
  fuelTypes$?: Observable<FuelType[]>;

  constructor(private appService: ApparatusService, private router: Router)
  {

  } 

  ngOnDestroy(): void {
    
  }
}
