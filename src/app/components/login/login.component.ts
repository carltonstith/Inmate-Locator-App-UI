import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['testuser@gmail.com'],
      password: ['testuser'],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((res: any) => {
        if (res) {
          alert('Login successful!');
          localStorage.setItem('token', res.token);
          this.router.navigate(['inmates']);
        } else {
          alert('Login failed!');
        }
      });
    }
    // this.http
    //   .get('http://localhost:3000/users', this.loginForm.value)
    //   .subscribe((res: any) => {
    //     const user = res.find((a:any) => {
    //       return a.username === this.loginForm.value.username;
    //     });
    //     if(user) {
    //       alert('Login successful!');
    //       localStorage.setItem('token', res.token);
    //       this.router.navigate(['inmates']);
    //     } else {
    //       alert('Login failed!');
    //     }
    //   });
  }
}
