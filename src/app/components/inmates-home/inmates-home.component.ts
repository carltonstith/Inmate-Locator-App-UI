import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmate } from 'src/app/interfaces/inmates';
import { InmatesService } from 'src/app/services/inmates.service';

@Component({
  selector: 'app-inmates-home',
  templateUrl: './inmates-home.component.html',
  styleUrls: ['./inmates-home.component.scss']
})
export class InmatesHomeComponent implements OnInit {

    constructor(private service: InmatesService, private router: Router) {
      this.default = 0;
    }

    inmates: Inmate[] = [];
    id: string = "";
    firstName: string = "";
    lastName: string = "";
    activeTab: boolean = true;
    default: any;

    ngOnInit(): void {
      this.service.getAllInmates().subscribe((data) => {
        // console.log(data);
        this.inmates = data;
      })
    }

    onClickGetDetails(id: string) {
      this.id = id;
      this.router.navigate(['/inmate-details', this.id]);
    }

    switchTab() {
      this.activeTab  = !this.activeTab;
    }

    switchSearchFirstName(e:Event) {
      console.log(e.target);
      //this.firstName = "";
      this.activeTab = !this.activeTab;
    }

    switchSearchLastName(e:Event) {
      console.log(e.target);
      //this.lastName = "";
      this.activeTab = !this.activeTab;
    }
}
