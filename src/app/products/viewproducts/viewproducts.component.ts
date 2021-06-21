import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddcategoryService } from 'src/app/services/addcategory.service';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.scss']
})
export class ViewproductsComponent implements OnInit {
responsedata:any=[];
  products: any;
  constructor(private pservices: AddcategoryService, private router:Router) { }

  ngOnInit(): void {
    this.pservices.getproducts().subscribe((res)=>{
    //   const baseurl = 'https://localhost:3000/uploads';
    // const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'image/jpg'
    //     })
    //   }
      console.warn(JSON.stringify(res));
     this.responsedata=res
     this.products=this.responsedata.userData
   //  return this.categories
//console.log(JSON.stringify(this.products))
    })
  }

    



}
