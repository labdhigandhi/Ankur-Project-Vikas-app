import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
// Doughnut
public doughnutChartLabels:string[] = ['Ying Yue L1', 'Zhang Yue L2', 'Li Yue L3'];
public doughnutChartBgColors:string[] = ['rgba(255, 99, 132, 0.9)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'];
public doughnutChartData:number[] = [350, 450, 100];
public doughnutChartType:string = 'doughnut';

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

constructor(){ 

}



ngOnInit(){}

}
