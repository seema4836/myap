import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  ResponseResetForm!: FormGroup;
  fb: any;
  resetToken: any;
  successMessage: null;
  errorMessage: any;



  constructor(private router:Router, private userService:UsersService) { }

  ngOnInit(): void {
    this.ResponseResetForm = this.fb.group(
      {
        resettoken: [this.resetToken],
        newPassword: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
      }
    );
  }

  ResetPassword(form:any){
    console.log(this.ResponseResetForm.value)
    this.userService.resetPassword(this.ResponseResetForm.value).subscribe(
      (data:any) => {
        this.ResponseResetForm.reset();
        this.successMessage = data.message;
        setTimeout(() => {
          this.successMessage = null;
          this.router.navigate(['login']);
        }, 3000);
      },
     
    );
  }

}
