import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:9090/'

  constructor(private http : HttpClient) { }

  userAuth(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl+'login', user);
  }

  loggedIn(): boolean {
    return !!localStorage.getItem('status');
  }
}
