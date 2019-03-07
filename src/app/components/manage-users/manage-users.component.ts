import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../beans/user';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  users: User[] = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService ) { }

  ngOnInit() {
    this.userService
      .getAllUsers()
      .subscribe(
        (data: User[]) => {
          this.users = data;
        });
  }

  addUser(){
    this.router.navigate(['addUser'], { relativeTo: this.route.parent });
  }

  userAction() {

  }

}
