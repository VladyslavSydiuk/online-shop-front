import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Product} from "../../interfaces/product.interface";
import {BehaviorSubject, Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)
  baseApiUrl ='http://localhost:8080/'
  private products: BehaviorSubject<Product[] | null>  = new BehaviorSubject<Product[] | null>(null)
  public  $products: Observable<Product[] | null>  = this.products.asObservable()

  public findProductById(name: string){
    let params = new HttpParams();
    if (name){
      console.log("hello bratishka")
      params = params.set('name', name);
    }
    this.http.get<Product[]>(`${this.baseApiUrl}products`, {params}).pipe(take(1)).subscribe(value => {
      this.products.next(value)
    })
  }
}
