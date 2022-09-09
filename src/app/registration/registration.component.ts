import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registerForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name:[''],
      last_name:[''],
      username:[''],
      email:[''],
      phone_no:[''],
      password1:[''],
      password2:[''],
    })
  }

  register() {
    this.http.post('http://127.0.0.1:8000/api/user/auth/register/', this.registerForm.value).subscribe(res => {
      alert('registered');
      this.registerForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert(err);
    }
    )
  }

}
