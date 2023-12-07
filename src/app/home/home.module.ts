import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { InmatesHomeComponent } from '../components/inmates-home/inmates-home.component';
import { InmateDetailsModalComponent } from '../components/inmate-details-modal/inmate-details-modal.component';
import { InmateDetailsComponent } from '../components/inmate-details/inmate-details.component';
import { SearchPipe } from '../helpers/search.pipe';
import { MockCorrectionalFaciltyComponent } from '../components/mock-correctional-facilty/mock-correctional-facilty.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [InmatesHomeComponent, InmateDetailsModalComponent, InmateDetailsComponent, MockCorrectionalFaciltyComponent,SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HomeRoutingModule,
    // FontAwesomeModule
  ],
  exports: [
    InmatesHomeComponent,
  ]
})
export class HomeModule { }
