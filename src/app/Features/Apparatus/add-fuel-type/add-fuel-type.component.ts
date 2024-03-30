import { Component, OnDestroy } from '@angular/core';
import { ApparatusService } from '../Services/apparatus.service';
import { AddFuleTypeRequest } from '../models/addFuelTypeRequest.model';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-add-fuel-type',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './add-fuel-type.component.html',
  styleUrl: './add-fuel-type.component.css'
})
export class AddFuelTypeComponent implements OnDestroy{
  model: AddFuleTypeRequest;
  private addFueTypeSubscrition?: Subscription;

  constructor(private appService: ApparatusService, private router: Router)
  {
    this.model = new AddFuleTypeRequest();
  } 

  ngOnDestroy(): void {
    this.addFueTypeSubscrition?.unsubscribe();
  }

  OnFormSubmit(){
    this.addFueTypeSubscrition = this.appService.addFuleType(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/apparatus/fueltypes');
      }
    })
  }
}
