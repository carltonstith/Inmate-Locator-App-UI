import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InmatesService {
  private inmatesUrl = 'http://localhost:3000/inmates';
  private inmateProfileUrl = 'https://randomuser.me/api/';
  // private maleInmateProfilePictureUrl = 'https://xsgames.co/randomusers/avatar.php?g=male';
  // private femaleInmateProfilePictureUrl = 'https://xsgames.co/randomusers/avatar.php?g=female';
  private maleInmateProfilePictureUrl = 'https://randomuser.me/api?gender=male';
  private femaleInmateProfilePictureUrl = 'https://randomuser.me/api?gender=female';

  constructor(private http: HttpClient) { }

  getAllInmates():Observable<any> {
    return this.http.get(this.inmatesUrl);
  }

  // get inmate by id

  // get inmate profile
  getInmateProfile():Observable<any> {
    return this.http.get(this.inmateProfileUrl);
  }

  // get male inmate profile picture
  getMaleInmateProfilePicture():Observable<any> {
    return this.http.get(this.maleInmateProfilePictureUrl);
  }

  // get female inmate profile picture
  getFemaleInmateProfilePicture():Observable<any> {
    return this.http.get(this.femaleInmateProfilePictureUrl);
  }
}
