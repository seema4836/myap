import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsersService} from "../services/users.service";
@Component({
  selector: 'app-forgetpasswod',
  templateUrl: './forgetpasswod.component.html',
  styleUrls: ['./forgetpasswod.component.scss']
})
export class ForgetpasswodComponent implements OnInit {
  RequestResetForm!: FormGroup;
  forbiddenEmails: any;
  errorMessage!: string;
  successMessage: any;
  IsvalidForm = true;
  constructor( private userService: UsersService,
    private router: Router,) { }

  ngOnInit(): void {
    this.RequestResetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    });
  }
  RequestResetUser(form: { valid: any; }) {
    console.log(form)
    if (form.valid) {
      this.IsvalidForm = true;
      this.userService.requestReset(this.RequestResetForm.value).subscribe(
        data => {
          this.RequestResetForm.reset();
          this.successMessage = "Reset password link send to email sucessfully.";
         
          setTimeout(() => {
            this.successMessage = null;
            this.router.navigate(['login']);
          }, 5000);
        },
        err => {

          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      );
    } else {
      this.IsvalidForm = false;
    }
  }

}
