import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InmatesService } from 'src/app/services/inmates.service';
@Component({
  selector: 'app-inmate-details-modal',
  templateUrl: './inmate-details-modal.component.html',
  styleUrls: ['./inmate-details-modal.component.scss'],
})
export class InmateDetailsModalComponent implements OnInit {
  @Input() selectedInmate: any;
  @Input() age: any;
  inmateProfile: any;
  inmateProfilePicture: any;

  constructor(
    private modalService: NgbModal,
    private inmateService: InmatesService
  ) {}

  ngOnInit() {
    this.inmateService.getInmateProfile().subscribe((data) => {
      this.inmateProfile = data.results;
      this.inmateProfile.forEach((element: any) => {
        this.inmateProfilePicture = element.picture.large;
        // if (element.gender == this.selectedInmate.gender) {
        //   this.inmateProfilePicture = element.picture.thumbnail;
        // } else {
        //   this.inmateProfilePicture = 'https://randomuser.me/api/portraits/lego/1.jpg';
        // }
      });
    });
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
