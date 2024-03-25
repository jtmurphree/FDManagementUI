import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddApparatusRequest } from '../models/addApparatusRequest.model';
import { Subscription } from 'rxjs';
import { ApparatusService } from '../Services/apparatus.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-apparatus',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './add-apparatus.component.html',
  styleUrl: './add-apparatus.component.css'
})

export class AddApparatusComponent {
  model: AddApparatusRequest;
  private addApparatusSubscription?: Subscription

  constructor(private appService: ApparatusService, private router: Router){
    this.model = new AddApparatusRequest;
  }

  ngOnDestroy(): void {
    this.addApparatusSubscription?.unsubscribe();
  }

  OnFormSubmit(): void {
    this.addApparatusSubscription = this.appService.addApparatus(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('admin/apparatus');
      }
    });
  }
}
