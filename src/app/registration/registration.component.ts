
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/service/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^[a-zA-Z0-9]{3,10}$')]],
      phonenumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{10}$')]]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit(user) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log(user);
    this.userService.register(user).subscribe(response => {
      console.log(response);
      if (response.status == 200) {
        console.log(response.body.header);

        localStorage.setItem('Authorization', response.body.headers);
      }
      else {
        console.log(response.body.headers);
      }
    })
   

  }
}