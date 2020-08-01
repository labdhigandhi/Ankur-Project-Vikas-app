import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  feedbackForm : FormGroup;
  isFeedback:boolean = false;
  iconstring:string = 'add';

  constructor(public router: Router, public formBuilder: FormBuilder) {
    this.feedbackForm = formBuilder.group({
      feedback: ['', Validators.required],
   });
  }

  feedback_list=[{"fName":"Labdhi","lName":"Gandhi","feedback":"feedback given"}];

  users: any[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];
 
  ngOnInit() {
  }

  onSubmit(){
    alert('request raised');
    console.log(this.feedbackForm)
    this.isFeedback = false;
    this.iconstring = 'add';
    this.router.navigate(['/app/tabs/main']);
  }

  showHide(){
    if(this.isFeedback == false){
      this.isFeedback = true;
      this.iconstring = 'close';
    }else{
      this.isFeedback = false;
      this.iconstring = 'add';
    }
  }

}
