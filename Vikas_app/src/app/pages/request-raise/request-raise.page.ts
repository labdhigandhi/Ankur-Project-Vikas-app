import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'request-raise',
  templateUrl: './request-raise.page.html',
  styleUrls: ['./request-raise.page.scss'],
})
export class RequestRaisePage implements OnInit {

  requestraiseForm : FormGroup;
  isRaise:boolean = false;
  iconstring:string = 'add';

  constructor(public router: Router, public formBuilder: FormBuilder) { 
    this.requestraiseForm = formBuilder.group({
      expenses: ['', Validators.required],
      amount: ['', Validators.required],
  });
  }

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

  raise_list=[{"type":"Competition","expenses":"eqiupments","amount":"Rs. 20","status":"Pending"},{"type":"Competition","expenses":"eqiupments and travelling expenses","amount":"Rs. 20","status":"Pending"}]

  /*compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn*/

  ngOnInit() {
  }

  onRaise(){
    alert('Feedback added');
    console.log(this.requestraiseForm)
    this.isRaise = false;
    this.iconstring = 'add';
    this.router.navigate(['/app/tabs/main']);
  }

  showHide(){
    if(this.isRaise == false){
      this.isRaise = true;
      this.iconstring = 'close';
    }else{
      this.isRaise = false;
      this.iconstring = 'add';
    }
  }

}
