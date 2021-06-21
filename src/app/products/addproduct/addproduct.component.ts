import { Component, OnInit } from '@angular/core';
import { AddcategoryService } from 'src/app/services/addcategory.service';
import { Router } from '@angular/router';
import {Product} from './product.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl,  FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  [x: string]: any;
category:any=[];
disabled:boolean=false
result:any;
files : FileList | undefined; 
  localUrl: any;
  
  formData!: Product;
  
    userForm: FormGroup ;
  file: any;
  // userForm = new FormGroup({
  //   pname: new FormControl(''),
  //   price: new FormControl(''),
  //   catid: new FormControl(''),
  //   description: new FormControl(''),
  //   image: new FormControl(null),
   
    
  // });
  constructor(private catservices:AddcategoryService,private router:Router,private http:HttpClient,public fb: FormBuilder) {

    this.userForm = this.fb.group({
      pname: [''],
      price:[''],
      catid:[''],
      description:[''],
      image: [null]
    })
   }
  
  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.localUrl = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);

        if (event.target.files.length > 0) {
          const file = event.target.files[0];
          this.image=file;
     
         this.userForm.patchValue({image:file});
        console.log(this.image.name)
         this.userForm.get("image")?.updateValueAndValidity();
          
        }
    }
}

  ngOnInit(): void {
    this.catservices.getcat().subscribe((res)=>{
      this.category=res;
 this.result=this.category.userData
  // alert(JSON.stringify(this.result))
    })
    
  }
  onSubmit(){
   
  console.warn(this.userForm.value);
  console.log(this.userForm.get("image")?.value)
  
  this.catservices.addproducts(this.userForm.value.pname,this.userForm.value.price,this.userForm.value.catid
    ,this.userForm.value.description,this.userForm.value.image).subscribe((res: any)=>{
   
    console.log(res)
    //this.router.navigate(['/viewproducts']);
    });
  }
}
