import { Pager } from './../models/pager';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;
  pager: Pager = {"page" : 0, "size" : 3};
  totalPages: number;
  totalPagesRange: number[] = [];
  constructor(private userService: UserService) { }

  getTotalPages() {
    this.userService.getAll(this.pager).subscribe(r => {
       this.totalPages = r['total_pages']+1;
      for (let i = 1; i < this.totalPages; i++) {
        this.totalPagesRange.push(i);
      }

    });
  }

pageEvent(){
 this.getUsers();
}
  getUsers(){
    this.userService.getAll(this.pager).subscribe(response=>{
      this.users = response['data'];

    });
  }

  ngOnInit() {
    this.getUsers();
    this.getTotalPages();
  }

}
