import { Component, OnInit } from '@angular/core';
import { ApparatusService } from '../Services/apparatus.service';
import { ApparatusType } from '../models/apparatusType.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-type-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './type-list.component.html',
  styleUrl: './type-list.component.css'
})
export class TypeListComponent {
  types$?: Observable<ApparatusType[]>;

  constructor(private appService: ApparatusService){

  }

  ngOnInit(): void{
    this.types$ = this.appService.getApparatusTypes();
  }
}
