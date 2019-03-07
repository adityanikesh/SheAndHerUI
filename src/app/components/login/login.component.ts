import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../beans/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    this.userService.login(value);
  }

  createAccount() {
    this.router.navigate(['register']);
  }
}
