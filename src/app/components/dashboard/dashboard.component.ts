import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  option = 0;

  constructor() {
  }

  ngOnInit() {
  }

  setOption(op: number): void {
    this.option = op;
  }

}
