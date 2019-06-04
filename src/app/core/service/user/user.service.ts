import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpUtil: HttpService, private router: Router ) { }

  login(user) {
    return this.httpUtil.postService(environment.base_url + 'login', user);
  }

  register(user) {
   return this.httpUtil.postService(environment.base_url + 'registration', user);
  }

  forgotpassword(user) {
    return this.httpUtil.postService(environment.base_url + 'forgotpassword', user);
  }

  resetpassword(user, id) {
    return this.httpUtil.putService(environment.base_url + 'resetpassword/' + id, user, id);
  }
}