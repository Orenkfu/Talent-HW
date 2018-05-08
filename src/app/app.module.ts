import { StorageService } from './storage.service';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PagerComponent } from './pager/pager.component';

const routes = [
 
  {
    path: 'users/:id',
    component: SingleUserComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    UserListComponent,
    SingleUserComponent,
    HomeComponent,
    PagerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [UserService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
