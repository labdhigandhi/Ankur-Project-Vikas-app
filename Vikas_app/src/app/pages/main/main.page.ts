
import { Component, ViewChildren, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonSlides, AlertController, IonList, LoadingController, ModalController, ToastController, NavController } from '@ionic/angular';
// import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

import { CommonProvider } from '../../providers/common' 
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
// // Gets a reference to the list element
// @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

// dayIndex = 0;
// queryText = '';
// segment = 'all';
// excludeTracks: any = [];
// shownSessions: any = [];
// groups: any = [];
// confDate: string;
condition:string ="stripe";
constructor(
  public alertCtrl: AlertController,
  public confData: ConferenceData,
  public loadingCtrl: LoadingController,
  public modalCtrl: ModalController,
  public router: Router,
  public toastCtrl: ToastController,
  public user: UserData,
) { }

ngOnInit() {
  this.updateSchedule();
}

@ViewChildren('slides') slides: IonSlides;

subscriptionSlider = {
    autoplay: false,
    pages: false,
    zoom: {
      maxRatio: 1
    },
    slidesPerView: 1.3,
    spaceBetween: 0,
    centeredSlides: false,
  };

  blogSlider = {
    autoplay: false,
    pages: false,
    zoom: {
      maxRatio: 1
    },
    slidesPerView: 1.3,
    spaceBetween: 0,
    centeredSlides: false,
  };

  exploreProductsSlider = {
    autoplay: false,
    pages: false,
    zoom: {
      maxRatio: 1
    },
    slidesPerView: 4.5,
    spaceBetween: 0,
    centeredSlides: false,
  };


  navigate(id:any){
    switch(id){
      case 0:
        this.router.navigate(['../studentregister']);
        break;
      case 1:
        this.router.navigate(['../selfattendance']);
        break;
      case 2:
        this.router.navigate(['../studentattendance']);
        break;
      case 3:
        this.router.navigate(['../mygoal']);
        break;
      case 4:
        this.router.navigate(['../feedback']);
        break;
      case 5:
        this.router.navigate(['../reports']);
        break;
      case 6:
        this.router.navigate(['../request-raise']);
        break;  
      case 7:
        this.router.navigate(['../training-diary']);
        break;          
      }
  }

updateSchedule() {
  // Close any open sliding items when the schedule updates
  // if (this.scheduleList) {
  //   this.scheduleList.closeSlidingItems();
  // }

  // this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
  //   this.shownSessions = data.shownSessions;
  //   this.groups = data.groups;
  // });
}

payMethod(id){
  localStorage.setItem('payMethodId', id);
  //this.common._pagerouting('plans');
};

//updateSchedule() {
    // Close any open sliding items when the schedule updates
    // if (this.scheduleList) {
    //   this.scheduleList.closeSlidingItems();
    // }

    // this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
    //   this.shownSessions = data.shownSessions;
    //   this.groups = data.groups;
    // });
  //}
}
