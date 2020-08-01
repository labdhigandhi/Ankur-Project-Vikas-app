import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'studentattendance',
  templateUrl: './studentattendance.page.html',
  styleUrls: ['./studentattendance.page.scss'],
})
export class StudentattendancePage implements OnInit {

  student_list=[{"fName":"Alice","lName":"Smith"},{"fName":"Bob","lName":"Davis"},{"fName":"Charlie","lName":"Rosenburg"}];
  constructor(public router: Router) { }

  ngOnInit() {
  }
  present(index){}

  absent(index){}

  markAttendance(){this.router.navigate(['/app/tabs/main'])}

  viewAttendance(){this.router.navigate(['/app/tabs/main'])}

}
