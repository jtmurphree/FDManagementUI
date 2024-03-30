import { Component, OnDestroy } from '@angular/core';
import { AddDriveTypeRequest } from '../models/addDriveTypeRequest.model';
import { Subscription } from 'rxjs';
import { ApparatusService } from '../Services/apparatus.service';
import { Router } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-drive-type',
  standalone: true,
  imports: [RouterModule, FormsModule, RouterLink],
  templateUrl: './add-drive-type.component.html',
  styleUrl: './add-drive-type.component.css'
})
export class AddDriveTypeComponent implements OnDestroy {
  model: AddDriveTypeRequest
  private addDriveTypeSubscription?: Subscription;

  constructor( private appService: ApparatusService, private router: Router){
    this.model = new AddDriveTypeRequest();
  }

  ngOnDestroy(): void {
    this.addDriveTypeSubscription?.unsubscribe();
  }

  OnFormSubmit(): void{
    this.addDriveTypeSubscription = this.appService.addDriveType(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/apparatus/drivetypes');
      }
    })
  }
}
