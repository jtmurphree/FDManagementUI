import { Component, OnInit } from '@angular/core';
import { ApparatusService } from '../Services/apparatus.service';
import { FuelType } from '../models/fuelType.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-fuel-type-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './fuel-type-list.component.html',
  styleUrl: './fuel-type-list.component.css'
})
export class FuelTypeListComponent implements OnInit{
  fuelTypes$?: Observable<FuelType[]>;

  constructor(private appService: ApparatusService){

  }

  ngOnInit(): void{
    this.fuelTypes$ = this.appService.getFuelTypes();
  }
}
