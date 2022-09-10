import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-wish-lists',
  templateUrl: './wish-lists.component.html',
  styleUrls: ['./wish-lists.component.css']
})
export class WishListsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  lists = [
    {id: "123", name: "first list"},
    {id: "124", name: "second list"}
  ]
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

  goToList (id: string) {
    alert(id);
    this.router.navigate(['wish-list']);
  }

  editList (id: string) {
    alert(id);
  }

  deleteList (id: string) {
    alert(id);
  }
}
