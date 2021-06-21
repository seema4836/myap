import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService} from "../services/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  showres: boolean = false;
  constructor(public usersService:UsersService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(f:NgForm)
  {
    console.log(f.value);

    this.usersService.register(f.value).subscribe((res)=>{
      console.warn(JSON.stringify(res));
      this.showres=true;
     //alert(JSON.stringify(res))
     alert('Register successfully');
      //this.router.navigateByUrl('/home');

    },(err)=>{
      console.log(err);
      alert(err)
      alert('register first')
    })
  }

}
