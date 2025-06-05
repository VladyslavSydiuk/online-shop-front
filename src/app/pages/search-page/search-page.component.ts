import {Component, DestroyRef, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductComponent} from "../../component/product/product.component";
import {ProductService} from "../../data/service/product/product.service";
import {Product} from "../../data/interfaces/product.interface";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {FormsModule} from "@angular/forms";
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    ProductComponent,
    FormsModule,
    // ✅ також потрібен для <input matInput>
  ],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
  encapsulation: ViewEncapsulation.None
})

export class SearchPageComponent implements OnInit {
  private searchSubject = new Subject<string>();

  public userName: string = '';
  private readonly destroyRef = inject(DestroyRef);
  productService = inject(ProductService);
  products: Product[] = []

  private initComponents(): void {
    this.productService.findProductById("")
    this.productService.$products.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => this.products = value || []);
    this.searchSubject.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      this.productService.findProductById(value)

    })
  }

  ngOnInit(): void {
    this.initComponents()
  }

  public search(value: any): void {
    console.log(value.target.value)
    this.searchSubject.next(value.target.value);

  }
}
