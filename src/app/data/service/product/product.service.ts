import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)
  baseApiUrl ='http://localhost:8080/'

  getProducts(){
    return this.http.get<Product[]>(`${this.baseApiUrl}products`)

  }
}
