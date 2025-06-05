import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../../component/header/header.component";
import {SideBarComponent} from "../../component/side-bar/side-bar.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SideBarComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
