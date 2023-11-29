import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inmateLocatorApp-UI';
  toggle: boolean = false;

  toggleNav() {
    console.log("toggleNav");
    this.toggle = !this.toggle;
  }
}
