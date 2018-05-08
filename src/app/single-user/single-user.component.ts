import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  id:number;
  user;
  avatar;
  constructor(private userService: UserService,private route: ActivatedRoute) { }

  getUser(id: number){
    this.userService.getUser(id).subscribe(r=>{
      this.user = r['data'];
      this.avatar = this.user['avatar'];
    });
  }
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getUser(this.id);
  }

}
