import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:[''],
    })
  }
  
  login() {
    interface UserID {
      user_id: string;
      username: string;
    }
    interface JWTAuth {
      access: string;
      refresh: string;
    }  
    this.http.post<UserID>('http://127.0.0.1:8000/api/user/auth/login/', this.loginForm.value).subscribe(res => {
      localStorage.setItem('user_id', res.user_id);
      this.http.post<JWTAuth>('http://127.0.0.1:8000/api/token/', 
      {'username': res.username, 'password': this.loginForm.controls['password'].value}).subscribe(tokenRes => {
        localStorage.setItem('access_token', tokenRes.access);
        localStorage.setItem('refresh_token', tokenRes.refresh);
        this.router.navigate(['wish-lists']);
      }, err => {
        alert(err);
      })
      this.loginForm.reset();
    },err=>{
      alert(err);
    }
    )
  }

}
