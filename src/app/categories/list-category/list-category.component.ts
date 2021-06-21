import { Component, OnInit } from '@angular/core';
import { AddcategoryService } from 'src/app/services/addcategory.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  categories: any=[];
  userData:any;
  answerresponse: any;
  result: any;
  delres:boolean=false;
  alreadyexist:boolean=false
  constructor(private catservices: AddcategoryService, private router:Router) { }

  ngOnInit(): void {
   this.catservices.getcat().subscribe((res)=>{
      console.warn(JSON.stringify(res));
     this.answerresponse=res
     this.categories=this.answerresponse.userData
   //  return this.categories
//alert(JSON.stringify(this.categories))
    })


    
  }
 deletecat(id:any){
  //alert(id)
  this.catservices.deletecat(id).subscribe((res)=>{
   
   this.router.navigate(['/listcat']);
   this.ngOnInit();
   this.delres=true;
   
  }, (err) => {
    console.log(err);
  }

 )
 
}

}
