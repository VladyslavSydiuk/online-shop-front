import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from "./component/product/product.component";
import {ProductService} from "./data/service/product/product.service";
import {Product} from "./data/interfaces/product.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-shop-front';

}
