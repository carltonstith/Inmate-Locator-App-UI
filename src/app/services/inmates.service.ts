import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InmatesService {
  private inmatesUrl = 'http://localhost:3000/inmates';
  private inmateProfileUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getAllInmates():Observable<any> {
    return this.http.get(this.inmatesUrl);
  }

  // get inmate by id

  // get inmate profile
  getInmateProfile():Observable<any> {
    return this.http.get(this.inmateProfileUrl);
  }
}
