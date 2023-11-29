import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inmate-details',
  templateUrl: './inmate-details.component.html',
  styleUrls: ['./inmate-details.component.scss']
})
export class InmateDetailsComponent {
  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/inmates']);
  }

}
