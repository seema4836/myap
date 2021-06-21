import { Component, OnInit } from '@angular/core';
import { AddcategoryService } from 'src/app/services/addcategory.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {
  catres: boolean = false;
  btnDisabled=false
  alreadyexist:boolean=false
  constructor(private addcatservice:AddcategoryService,private router:Router) { }

  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm)
  {
    //alert("hello")
     console.log(form.value)
    this.addcatservice.addcat(form.value).subscribe((res)=>{
     
  //alert(JSON.stringify(res));
      //this.catres=true;
     
      this.router.navigate(['/listcat']);
    })
    this.alreadyexist=true;
  }

}
