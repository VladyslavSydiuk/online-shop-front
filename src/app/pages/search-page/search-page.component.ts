import {Component, inject} from '@angular/core';
import {ProductComponent} from "../../component/product/product.component";
import {ProductService} from "../../data/service/product/product.service";
import {Product} from "../../data/interfaces/product.interface";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  productService = inject(ProductService);
  products: Product[] = []

  constructor() {
    this.productService.getProducts().subscribe(value => {
      this.products = value
    })
  }

}
