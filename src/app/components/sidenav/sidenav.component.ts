import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';

import { Menu } from '../../beans/menu';
import { SubMenu } from '../../beans/submenu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {

  @ViewChild('sidenavLeft') sidenavLeft: MatSidenav;
  @ViewChild('sidenavRight') sidenavRight: MatSidenav;
  menuWithoutSubMenuClickFlag = false;
  currentFocus: string = 'Dashboard';
  currentHover: string;

  menus: Menu[] = [
    { name: 'Dashboard', url: 'dashboard', icon: 'home', submenus: [], hide: true, withSubMenu: false },
    { name: 'Visualization', url: 'visualization', icon: 'wallpaper', submenus: [], hide: true, withSubMenu: false },
    {
      name: 'Application', url: 'manage-applications', icon: 'devices_other', submenus: [],
      // submenus: [
      //   {
      //     name: 'Registered Applications',
      //     url: 'registered-applications',
      //     icon: 'security'
      //   },
      //   {
      //     name: 'Detected Applications',
      //     url: 'detected-applications',
      //     icon: 'device_unknown'
      //   }
      // ],
      hide: true, withSubMenu: false
    },
    {
      name: 'Policy', url: '', icon: 'assignment',
      submenus: [
        {
          name: 'Application Security Policy',
          url: 'app-security-policy',
          icon: ''
        },
        {
          name: 'Data Security Policy',
          url: 'data-security-policy',
          icon: ''
        },
        {
          name: 'Policy Schedules',
          url: 'policy-schedules',
          icon: ''
        }
      ],
      hide: true, withSubMenu: true
    },
    { name: 'Reports', url: 'reports', icon: 'report', submenus: [], hide: true, withSubMenu: false }
  ];

  userAvatarMenus: Menu[] = [
    { name: 'My Account', url: 'myAccount', icon: 'perm_identity', submenus: [], hide: true, withSubMenu: false },
    { name: 'Manage Users', url: 'manageUsers', icon: 'person_add', submenus: [], hide: true, withSubMenu: false },
    { name: 'Manage Clients', url: 'manageClients', icon: 'apps', submenus: [], hide: true, withSubMenu: false },
    { name: 'Logout', url: 'login', icon: 'power_settings_new', submenus: [], hide: true, withSubMenu: false }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) {
  }

  ngOnInit() {
    this.router.navigate(['dashboard'], { relativeTo: this.route });
  }

  toggleLeftSidenav() {
    this.sidenavLeft.toggle();
  }

  toggleRightSidenav() {
    this.sidenavRight.toggle();
  }

  closeLeftSidenav() {
    this.sidenavLeft.close();
  }

  closeRightSidenav() {
    this.sidenavRight.close();
  }

  menuAction(menu: Menu) {
    if (menu.withSubMenu) {
      this.toggleHide(menu);
    } else {
      if (menu.name === 'Logout') {
        this.userService.logout();
        this.router.navigate([menu.url]);
      } else {
        this.currentFocus = menu.name;
        this.currentHover = '';
        this.router.navigate([menu.url], { relativeTo: this.route }); //
        this.closeLeftSidenav();
        this.closeRightSidenav();
      }
    }
  }

  subMenuAction(subMenu: SubMenu) {
    this.currentFocus = subMenu.name;
    this.currentHover = '';
    this.router.navigate([subMenu.url], { relativeTo: this.route });
    this.closeLeftSidenav();
    this.closeRightSidenav();
  }

  mouseEnterAction(name: string) {
    if (this.currentFocus !== name) {
      this.currentHover = name;
    }
  }

  mouseLeaveAction() {
    this.currentHover = '';
  }

  getMenuAndSubMenuClasses(name: string) {
    let classes = {
      currentFocus: name === this.currentFocus,
      currentHover: name === this.currentHover,
    };
    return classes;
  }

  showOrHideSubMenuStyles(menu: Menu) {
    var height = menu.submenus.length * 42;
    let styles = {
      'height': menu.hide ? '0' : height + 'px',
    };
    return styles;
  }

  toggleHide(menu: Menu) {
    menu.hide = !menu.hide;
  }

  logout() {
    this.userService.logout();
  }
}
