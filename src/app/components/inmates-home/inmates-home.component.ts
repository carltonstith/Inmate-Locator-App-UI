import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Inmate } from 'src/app/interfaces/inmates';
import { InmatesService } from 'src/app/services/inmates.service';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InmateDetailsModalComponent } from '../inmate-details-modal/inmate-details-modal.component';

@Component({
  selector: 'app-inmates-home',
  templateUrl: './inmates-home.component.html',
  styleUrls: ['./inmates-home.component.scss'],
})
export class InmatesHomeComponent implements OnInit {
  @Output() inmates: Inmate[] = [];
  @Output() selectedInmate: any;
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  gender: string = '';

  @Output() age:any;

  activeTab: boolean = true;
  default: any;
  faSort = faSort;

  naturalCollator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
  });

  constructor(
    private service: InmatesService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.default = 0;
  }

  ngOnInit(): void {
    this.service.getAllInmates().subscribe((data) => {
      // console.log(data);
      this.inmates = data;
    });
  }

  // get the selected inmate object

  openDetailsModal(id: string) {
    console.log(id);
    this.inmates.forEach((element) => {
      if (element.id == id) {
        this.selectedInmate = element;
        console.log(this.selectedInmate.dateOfBirth);
        // get date of birth and calculate age
        const dateOptions = {
          timeZone: 'UTC',
          month: 'long' as const,
          day: 'numeric' as const,
          year: 'numeric' as const,
        };

        const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);
        const dateAsFormattedString = dateFormatter.format(
          new Date(this.selectedInmate.dateOfBirth)
        );

        console.log(dateAsFormattedString); // "June 1, 2019"
        console.log('Today is ' + new Date().toLocaleDateString());
        let dob = new Date(Date.parse(this.selectedInmate.dateOfBirth));
        console.log(dob);
        let ageDiff = Date.now() - dob.getTime();
        let ageDate = new Date(ageDiff);
        this.selectedInmate.age = Math.abs(ageDate.getUTCFullYear() - 1970);
        console.log(this.selectedInmate.age);
        this.age = this.selectedInmate.age;
      }
    });
    const modalRef = this.modalService.open(InmateDetailsModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.selectedInmate = this.selectedInmate;
    // modalRef.result.then((result) => {
    //   console.log(result);
    // });
    // modalRef.closed.subscribe((result) => {
    //   console.log(result);
    // });
  }

  openDetailsModalOld(
    id: string,
    firstName: string,
    lastName: string,
    gender: string
  ) {
    // selected object
    this.selectedInmate = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
    };
    //console.log(this.id);
    const modalRef = this.modalService.open(InmateDetailsModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.selectedInmate = this.selectedInmate;
    modalRef.result.then((result) => {
      console.log(result);
    });
    modalRef.closed.subscribe((result) => {
      console.log(result);
    });

    // this.router.navigate(['/inmate-details', this.id]);
  }

  switchTab() {
    this.activeTab = !this.activeTab;
  }

  switchSearchFirstName(e: Event) {
    console.log(e.target);
    //this.firstName = "";
    this.activeTab = !this.activeTab;
  }

  switchSearchLastName(e: Event) {
    console.log(e.target);
    //this.lastName = "";
    this.activeTab = !this.activeTab;
  }

  sortOnFirstName(e: Event) {
    console.log(e);
    //this.inmates.sort((a, b) => a.firstName.localeCompare(b.firstName));
    this.inmates.sort((a, b) =>
      this.naturalCollator.compare(a.firstName, b.firstName)
    );
  }

  sort(isAsc: boolean) {
    console.log(isAsc);
    if (isAsc) {
      this.inmates.sort((a, b) =>
        a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
      );
    } else {
      this.inmates.sort((a, b) =>
        a.firstName > b.firstName ? -1 : b.firstName > a.firstName ? 1 : 0
      );
    }
  }
}
