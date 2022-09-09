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
    this.http.post('http://127.0.0.1:8000/api/user/auth/login/', this.loginForm.value).subscribe(res => {
      alert('logged in');
      this.loginForm.reset();
      this.router.navigate(['wish-lists']);
    },err=>{
      alert(err);
    }
    )
  }

}
