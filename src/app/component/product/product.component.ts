import {Component, Input} from '@angular/core';
import {Product} from "../../data/interfaces/product.interface";
import {ImgUrlPipe} from "../../helpers/pipes/img-url.pipe";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    ImgUrlPipe
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product?: Product;
}

