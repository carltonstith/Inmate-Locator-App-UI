import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: any): Observable <any> {
    return this.http.get('http://localhost:3000/users', credentials);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
