import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { GiftsComponent } from './gifts/gifts.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WishItemsComponent } from './wish-items/wish-items.component';
import { WishListsComponent } from './wish-lists/wish-lists.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'wish-lists', component: WishListsComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'gifts', component: GiftsComponent},
  {path: 'wish-items', component: WishItemsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
