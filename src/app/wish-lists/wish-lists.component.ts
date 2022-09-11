import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-wish-lists',
  templateUrl: './wish-lists.component.html',
  styleUrls: ['./wish-lists.component.css']
})
export class WishListsComponent implements OnInit {

  public lists: Array<any> = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getWishLists()
  }

  getWishLists() {
    interface WishList {
      id: string;
      name: string;
    }
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('access_token'));
    this.http.get<Array<WishList>>(`http://127.0.0.1:8000/api/wishes/wish-list/?owner_id=${localStorage.getItem('user_id')}`, {headers:headers_object}).subscribe(res => {
      console.log(res)
    }, err => {
      alert(err)
    })
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
