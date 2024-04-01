import { Component, OnDestroy } from '@angular/core';
import { ApparatusService } from '../Services/apparatus.service';
import { AddApparatusTypeRequest } from '../models/addTypeRequest.model';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-type',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './add-type.component.html',
  styleUrl: './add-type.component.css'
})
export class AddTypeComponent implements OnDestroy{
  model: AddApparatusTypeRequest;
  private addTypeSubscription?: Subscription

  constructor(private typeService: ApparatusService, private router: Router){
    this.model = new AddApparatusTypeRequest();
  }

  ngOnDestroy(): void {
    this.addTypeSubscription?.unsubscribe();
  }

  OnFormSubmit(): void{
    this.addTypeSubscription = this.typeService.addApparatusType(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/apparatus/types');
      }
    });
  }
}
