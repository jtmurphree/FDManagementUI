import { Component, OnInit } from '@angular/core';
import { ApparatusService } from '../Services/apparatus.service';
import { DriveType } from '../models/driveType.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-drive-type-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './drive-type-list.component.html',
  styleUrl: './drive-type-list.component.css'
})
export class DriveTypeListComponent implements OnInit{
  driveTypes$?: Observable<DriveType[]>;

  constructor(private appService: ApparatusService){

  }

  ngOnInit(): void {
    this.driveTypes$ = this.appService.getDriveTypes();
  }
}
