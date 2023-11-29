import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { InmatesHomeComponent } from '../components/inmates-home/inmates-home.component';
import { InmateDetailsModalComponent } from '../components/inmate-details-modal/inmate-details-modal.component';
import { InmateDetailsComponent } from '../components/inmate-details/inmate-details.component';
import { SearchPipe } from '../helpers/search.pipe';

@NgModule({
  declarations: [InmatesHomeComponent, InmateDetailsModalComponent, InmateDetailsComponent, SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  exports: [
    InmatesHomeComponent,
  ]
})
export class HomeModule { }
