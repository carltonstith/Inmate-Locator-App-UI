import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-correctional-facilty',
  templateUrl: './mock-correctional-facilty.component.html',
  styleUrls: ['./mock-correctional-facilty.component.scss']
})
export class MockCorrectionalFaciltyComponent implements OnInit {
    public randomNum: number = Math.floor(Math.random() * 100);

    constructor() { }

    ngOnInit(): void {
      this.randomNum = Math.floor(Math.random() * 100);
    }
}
