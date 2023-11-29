import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmatesHomeComponent } from '../components/inmates-home/inmates-home.component';
import { InmateDetailsComponent } from '../components/inmate-details/inmate-details.component';

const routes: Routes = [
  {
    path: 'inmates',
    component: InmatesHomeComponent
  },
  {
    path: 'inmate-details/:id',
    component: InmateDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
