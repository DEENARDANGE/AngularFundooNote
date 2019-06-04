import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../core/service/user/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetpasswordForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  hide = true;
  public id = this.route.snapshot.params.id;


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, private userService: UserService,
    private snackBar: MatSnackBar) { }

    ngOnInit() {
      this.resetpasswordForm = this.formBuilder.group({
        password: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{3,20}$")]],
       password2: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]{3,20}$")]]
  
      });
    }
  
    get f() { return this.resetpasswordForm.controls; }
  
    onSubmit(user) {
      this.submitted = true;
  
      if (this.resetpasswordForm.invalid) {
        return;
      }
      if(this.resetpasswordForm.value.password != this.resetpasswordForm.value.password2){
        this.snackBar.open("Not same", "Error", {
          duration: 3000,
        });
        return;
      }
      this.userService.resetpassword(user, this.id).subscribe(response => {
        console.log("Password has been reset");
        this.snackBar.open("Password has been reset", "OK", {
          duration: 3000,
        });
      }, (error) => {
        console.log("Couldn't reset the password ");
        this.snackBar.open("Password couldn't be reset", "OK", {
          duration: 3000,
        });
      });
    }
  
  }
  
  