import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InmatesService {
  private inmatesUrl = 'http://localhost:3000/inmates';

  constructor(private http: HttpClient) { }

  getAllInmates():Observable<any> {
    return this.http.get(this.inmatesUrl);
  }
}
