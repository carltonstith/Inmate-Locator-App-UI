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
  inmateProfilePictureResults: any;
  inmateProfilePicture: any;
  inmateGender?: string;

  constructor(
    private modalService: NgbModal,
    private inmateService: InmatesService
  ) {}

  ngOnInit() {
    // new inmate profile
    this.inmateGender = this.selectedInmate.gender;

    if(this.inmateGender == 'female') {
      this.inmateService.getFemaleInmateProfilePicture().subscribe((data) => {
        this.inmateProfilePictureResults = data.results;
        this.inmateProfilePictureResults.forEach((element: any) => {
          this.inmateProfilePicture = element.picture.large;
        });
      });
    } else if (this.inmateGender == 'male') {
      this.inmateService.getMaleInmateProfilePicture().subscribe((data) => {
        this.inmateProfilePictureResults = data.results;
        this.inmateProfilePictureResults.forEach((element: any) => {
          this.inmateProfilePicture = element.picture.large;
        });
      });
    }

    // this.inmateService.getInmateProfile().subscribe((data) => {
    //   this.inmateProfile = data.results;
    //   this.inmateProfile.forEach((element: any) => {
    //     this.inmateProfilePicture = element.picture.large;
    //     if (element.gender == this.selectedInmate.gender) {
    //       this.inmateProfilePicture = element.picture.large;
    //     } else {
    //       this.inmateProfilePicture = 'https://randomuser.me/api/portraits/lego/1.jpg';
    //     }
    //   });
    // });
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
