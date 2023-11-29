import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmate } from 'src/app/interfaces/inmates';
import { InmatesService } from 'src/app/services/inmates.service';
import {faSort} from '@fortawesome/free-solid-svg-icons'

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
    faSort = faSort;

    naturalCollator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

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

    sortOnFirstName(e: Event) {
      console.log(e);
      //this.inmates.sort((a, b) => a.firstName.localeCompare(b.firstName));
      this.inmates.sort((a, b) => this.naturalCollator.compare(a.firstName, b.firstName));
    }

    sort(isAsc: boolean) {
      console.log(isAsc);
      if (isAsc) {
        this.inmates.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((b.firstName > a.firstName) ? -1 : 0))
      } else {
        this.inmates.sort((a, b) => (a.firstName > b.firstName) ? -1 : ((b.firstName > a.firstName) ? 1 : 0))
      }
    }
}
