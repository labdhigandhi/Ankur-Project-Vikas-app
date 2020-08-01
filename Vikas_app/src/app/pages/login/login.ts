import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { ApiServicesService } from '../../providers/api-services.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;
  isAuthenticate: boolean = false; 

  constructor(
    public userData: UserData,
    public router: Router,
    public api: ApiServicesService
  ) { }

  // onLogin(form: NgForm) {
  //   this.submitted = true;
  //   this.router.navigateByUrl('/app/tabs/main');  
  //   // if (form.valid) {
  //   //   // this.userData.login(this.login.username);
  //   //   let params = { 
  //   //     'loginid' : 'kundan@squarepanda.in',
  //   //     'password' : 'Admin123'
  //   //    };
  
  //   //   // User Authentication
  //   //   this.api._postAPI('userauth',params).subscribe(async res => {
  //   //         // User exists
  //   //         if(res[0].status == "Sucess"){
  //   //           localStorage.setItem('loggedInuser', res[0].Name);
  //   //           this.isAuthenticate = true;
  //   //           this.router.navigateByUrl('/app/tabs/main');
  //   //         }else{
  //   //           alert(res[0].status);
  //   //         }
  //   //    },(err) => {
  //   //       alert('Error:'+err);
  //   //   });
  //   // }
  // }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/main');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
