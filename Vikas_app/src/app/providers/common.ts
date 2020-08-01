import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from  "@angular/router";

@Injectable()
export class CommonProvider {
    // Common API URL
    apiUrl = 'http://52.66.203.99:3000/user/';
    paymentApi = 'http://52.83.204.66:5000/api/';
    
    
    //Common Messages
    plswaitmsg: string = "Please wait";
    passwordreset: string = "Password is reset sucessfully...";
    SPloginmessage: string = "You will have to use Square Panda Inc Login Credentials";
    wechatloginmsg: string = "You will have to login using WeChat";
    plztryagain: string ="Please try again";
    EmailAddress:string ='kundan@squarepanda.in';
    Password:string ='Admin@123';

	constructor(
        public toastController: ToastController,
        private router:  Router) {

	}

    _pagerouting(pagename:string){
        this.router.navigateByUrl(pagename);
    }

    async createToastmsg(message:string){
        const toast = await this.toastController.create({
            message: message,
            duration: 1000,
            animated:true,
            cssClass:"toastcss"
          });
          toast.present();
    }


   
	

}
