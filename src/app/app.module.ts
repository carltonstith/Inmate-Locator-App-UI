import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { SearchPipe } from './helpers/search.pipe';
// import { InmateDetailsComponent } from './components/inmate-details/inmate-details.component';
//import { InmateDetailsModalComponent } from './components/inmate-details-modal/inmate-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    // SearchPipe,
    // InmateDetailsComponent,
    //InmateDetailsModalComponent,
    //InmatesHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
