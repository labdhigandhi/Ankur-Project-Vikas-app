import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'studentregister',
  templateUrl: './studentregister.page.html',
  styleUrls: ['./studentregister.page.scss'],
})
export class StudentregisterPage implements OnInit {
  studentregisterForm : FormGroup;
  isRegister:boolean = false;
  iconstring:string = 'add';
  
  student_list=[{"fName":"Alice","lName":"Smith"},{"fName":"Bob","lName":"Davis"},{"fName":"Charlie","lName":"Rosenburg"}]
  constructor(public router: Router, public formBuilder: FormBuilder) {

    this.studentregisterForm = formBuilder.group({
        fName: ['', Validators.required],
        lName: ['', Validators.required],
        DOB: [''],
        currPro: [''],
        oName: ['', Validators.required],
        comp: [''],
    });
  }
  //constructor(public router: Router) { }

  ngOnInit() {

  }
  onSubmit(){
    alert('student registered');
    console.log(this.studentregisterForm)
    this.router.navigate(['/app/tabs/main']);
  }

  showHide(){
    if(this.isRegister == false){
      this.isRegister = true;
      this.iconstring = 'close';
    }else{
      this.isRegister = false;
      this.iconstring = 'add';
    }
  }

}
