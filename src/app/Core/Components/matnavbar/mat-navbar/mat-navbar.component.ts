import { Component } from '@angular/core';
import { routes } from '../../../../app.routes';
import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'

@Component({
  selector: 'app-mat-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, RouterOutlet, MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './mat-navbar.component.html',
  styleUrl: './mat-navbar.component.css'
})
export class MatNavbarComponent {

}
