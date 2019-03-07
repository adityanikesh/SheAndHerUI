import { Component, OnInit, Input } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';

import { Menu } from '../../beans/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: SidenavComponent;

  userAvatarMenus: Menu[] = [
    { name:'My Account', url: 'myAccount', icon: 'perm_identity', submenus: [], hide: true, withSubMenu: false},
    { name:'Manage Users', url: 'manageUsers', icon: 'person_add', submenus: [], hide: true, withSubMenu: false},
    { name:'Logout', url: 'login', icon: 'power_settings_new', submenus: [], hide: true, withSubMenu: false}
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) {

  }

  ngOnInit() {

  }

  toggleLeftSidenav() {
    this.sidenav.toggleLeftSidenav();
    this.sidenav.closeRightSidenav();
  }

  toggleRightSidenav() {
    this.sidenav.toggleRightSidenav();
    this.sidenav.closeLeftSidenav();
  }

  userAvatarMenuAction(userAvatarMenu: Menu) {
    if(userAvatarMenu.name === 'Logout'){
      this.userService.logout();
    }else if(userAvatarMenu.name === 'Manage Users'){
      
    }
    this.router.navigate([userAvatarMenu.url]); //, { relativeTo: this.route }
  }

  myMethod() {
    console.log("Avatar clicked");
  }

}
