import { Component, OnInit,ViewChild ,ElementRef } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { NavController, NavParams, LoadingController, ToastController, AlertController, ActionSheetController } from '@ionic/angular';
//import { Camera,CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';
//import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 

declare var google;

@Component({
  selector: 'selfattendance',
  templateUrl: './selfattendance.page.html',
  styleUrls: ['./selfattendance.page.scss'],
})
export class SelfattendancePage implements OnInit {
  from: any;
  to: any;
  RealDate: any;
  selfattendance_list=[{"date":"01/08/2020","time":"13:07  -  13:15"}];
  btn='Mark Check-In';
  dateNtime1: any;
  dateNtime2: any;
  isCheckIn:boolean = false;
  isCheckOut:boolean = false;
  islocation:boolean = false;

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  latitude: number;
  longitude: number;

  /*options : GeolocationOptions;
  currentPos : Geoposition;
  @ViewChild('map') mapElement: ElementRef;
  map: any;*/

  constructor(public http: HttpClient,public router: Router,private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {this.getDates() }

  ngOnInit() {
  }

  assignTime() {
    var url = 'http://worldclockapi.com/api/json/utc/now';
    var onlineTime;

    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
        var tt = data;//.currentDateTime;
        onlineTime = tt['currentDateTime'];
        resolve(onlineTime);
      });
    });
  }

  presentOptions(){
    //console.log(this.selfattendanceForm)
    if(this.btn=='Mark Check-In'){
      this.isCheckIn= true;
      this.dateNtime1 = Date.now();
      this.btn='Mark Check-Out';
    }else{
      this.btn='Mark Check-In';
      this.dateNtime2 = Date.now();
      this.isCheckOut= true;
    }
    //var timeNow = new Date().getTime();
    //this.router.navigate(['/app/tabs/main'])
  }

  async getDates() {
    var time;
    time = await this.assignTime();
    var today = new Date(time);
    var date, month, year, currDate;
    month = today.getMonth() + 1;
    year = today.getFullYear();

    if (month > 9)
      currDate = month + "-" + year;
    else
      currDate = "0" + month + "-" + year;

    if (today.getDate() > 9)
      date = "" + today.getDate();
    else
      date = "0" + today.getDate();

    this.RealDate = date + "-" + currDate;
  }

  showlocation(){
    this.islocation=true;
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('dragend', () => {

        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();

        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  }

  /*getUserPosition(){
    this.options = {
    enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;     

        console.log(pos);
        this.addMap(pos.coords.latitude,pos.coords.longitude);

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    });
}

  ionViewDidEnter(){
    this.getUserPosition();
  } 

  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();

  }
  addMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
      });
  
      let content = "<p>This is your current position !</p>";          
      let infoWindow = new google.maps.InfoWindow({
      content: content
      });
  
      google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
      });
  }*/
}


