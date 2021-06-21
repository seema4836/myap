import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Category} from '../categories/addcategory/category.model';
import {Product} from '../products/addproduct/product.model';
@Injectable({
  providedIn: 'root'
})
export class AddcategoryService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http:HttpClient) { }
  addcat(cat: Category){
   
      return this.http.post('http://localhost:3000/cat',cat);
  
    }
    getcat(){
      return this.http.get('http://localhost:3000/cat');
     }
     deletecat(id:any) {
      return this.http.delete('http://localhost:3000/cat/'+id);
    }
    getproducts(){
      return this.http.get('http://localhost:3000/api/product');
    }
    addproducts(pname:string, price:Number,catid:string, description:String, image:File)
    {
      const formData:any= new FormData();
      formData.append('pname',pname)
      formData.append('price',price)
      formData.append('catid',catid)
      formData.append('description',description)
      formData.append('image',image )
     return this.http.post('http://localhost:3000/api/product',formData);
    }
}
