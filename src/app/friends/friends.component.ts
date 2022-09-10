import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  logout () {
    this.http.post('http://127.0.0.1:8000/logout/', {}).subscribe(res => {
      alert('logged out');
      this.router.navigate(['login']);
    },err=>{
      alert(err);
    }
    )
  }

}
