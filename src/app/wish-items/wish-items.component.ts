import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wish-items',
  templateUrl: './wish-items.component.html',
  styleUrls: ['./wish-items.component.css']
})
export class WishItemsComponent implements OnInit {

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
