import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHouse, faBookmark, faGear, faCircleQuestion, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public faHouse = faHouse;
  public faBookmark = faBookmark;
  public faGear = faGear;
  public faCircleQuestion = faCircleQuestion;
  public faRightFromBracket = faRightFromBracket;
  toggle: boolean = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

  }

  toggleNav() {
    console.log("toggleNav");
    this.toggle = !this.toggle;
  }

  logOut() {
    console.log("logOut");
    this.auth.logout();
    // localStorage.removeItem('token');
    // this.router.navigate(['/login']);
  }

}
