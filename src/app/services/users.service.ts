import {User} from '../register/user.model';
import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  newPassword(value: any) {
    throw new Error('Method not implemented.');
  }
  //baseUrl='http://localhost:3000/api/newUser';

 
 public newUser : User={
  fname:'',
  email:'',
  lname:'',
  password:''
 

}
httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
 
 
//baseUrl = 'http://localhost:3000/api/';
  
 
  constructor(private http:HttpClient) {

  }
register(user:User){
  return this.http.post('http://localhost:3000/users',user);
}
  
requestReset(user:User) {
  return this.http.post(`http://localhost:3000/users/forgot-password`, user);
}
resetPassword(token:any) {
  return this.http.post(`http://localhost:3000/users/reset-password`, +token);
}



    }
