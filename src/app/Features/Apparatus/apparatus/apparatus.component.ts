import { Component, OnInit } from '@angular/core';
import { ApparatusService } from '../Services/apparatus.service';
import { Apparatus } from '../models/apparatus.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-apparatus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apparatus.component.html',
  styleUrl: './apparatus.component.css'
})
export class ApparatusComponent implements OnInit {
  apparatus$?: Observable<Apparatus[]>;

  constructor(private appService: ApparatusService){

  }

  ngOnInit(): void {
    this.apparatus$ = this.appService.getAll();
  }


}
