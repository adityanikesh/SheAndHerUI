import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { HttpResponse } from '@angular/common/http'
import { UsernameValidator } from '../../validators/username.validator';
import { ParentErrorStateMatcher } from '../../validators/form.validator';

import { UserService } from '../../services/user.service';

import { User } from '../../beans/user';
import { Role } from '../../beans/role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  matching_passwords_group: FormGroup;
  parentErrorStateMatcher = new ParentErrorStateMatcher();

  roles: Role[] = [];

  validationMessages = {
    'firstName': [
      { type: 'required', message: 'First name is required' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers, letters or any of these_!@$#&' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'mismatch', message: 'Password mismatch' }
    ],
    'roleId': [
      { type: 'required', message: 'Please select your role' },
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) {
  }

  ngOnInit() {
    this.getAllRoles();
    this.createForm();
  }

  getAllRoles() {
    this.userService.getAllRoles().subscribe(data => this.roles = data);
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null],
      email: [null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]],
      country: [null],
      phone: [null],
      username: [null, [
        // UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^([a-zA-Z0-9_!@$#&])+$'),
        Validators.required
      ]],
      password: [null, [
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]],
      confirmPassword: [null, Validators.required],
      roleId: [null, Validators.required]
    }, { validator: this.passwordConfirming });
  }

  passwordConfirming(c: FormGroup): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      c.get('confirmPassword').setErrors({ 'mismatch': true });
      return { invalid: true };
    }
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value.firstName);
    // this.userService.createUser(value);
  }
}
