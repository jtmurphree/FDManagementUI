import { Component, OnInit } from '@angular/core';
import { ApparatusService } from '../Services/apparatus.service';
import { Apparatus } from '../models/apparatus.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-apparatus-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apparatus-list.component.html',
  styleUrl: './apparatus-list.component.css'
})
export class ApparatusListComponent implements OnInit {
  apparatus$?: Observable<Apparatus[]>;

  constructor(private appService: ApparatusService){

  }

  ngOnInit(): void {
    this.apparatus$ = this.appService.getAll();
  }


}
