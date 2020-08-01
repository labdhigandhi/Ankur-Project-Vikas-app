import { Component, ViewChild } from '@angular/core';
import { Router, Navigation } from '@angular/router';
import { AlertController, IonSlides, MenuController, NavController } from '@ionic/angular';
import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage {
  @ViewChild('player', {static: true}) player;
  @ViewChild('slides', {static: true}) slides: IonSlides;
  
  condition:string ="intro";

  username: string;
  showSkip = true;
  sliderConfig = {
    autoplay: true,
    pages:true,
    zoom: {
      maxRatio: 1
    },
    slidesPerView: 5,
    spaceBetween: 10,
    centeredSlides: true
  };
  


  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    public storage: Storage,
    public menu: MenuController,
    public navCtrl: NavController,


  ) { }

  route(pagename:string){
    this.condition = pagename;
   }
  
   startApp() {
    // this.router
    //   .navigateByUrl('/app/tabs/main')
    //   .then(() => this.storage.set('ion_did_tutorial', true));
    ///this.router.navigate(['/app/tabs/main', { id: '' }]);
    this.navCtrl.navigateRoot('/app/tabs/main');

  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        // this.router.navigateByUrl('/app/tabs/schedule');
        this.router.navigateByUrl('account');
      }
    });
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
