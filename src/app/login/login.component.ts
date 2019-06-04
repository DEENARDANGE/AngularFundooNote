import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { validateConfig } from '@angular/router/src/config';
import { MatIconRegistry } from '@angular/material';
import { UserService } from '../core/service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  get f() { return this.loginForm.controls; }

  onSubmit(user) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('invalid');
    }
    console.log(user);
    this.userService.login(user).subscribe(response => {

      console.log('login successfull');
      console.log(response.headers);


      localStorage.setItem('token', response.headers.get('token'));

      this.router.navigate(['/home']);


    },
    (error) => {
      console.log('Couldnt log in');

    });

  }
}
