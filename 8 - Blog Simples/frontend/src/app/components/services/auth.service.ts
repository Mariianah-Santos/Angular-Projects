import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:3001";

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, {email, password});
  }

  register(name: string, email: string, password: string, passworConfirm: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/signup`, {name, email, password, passworConfirm});
  }
}
