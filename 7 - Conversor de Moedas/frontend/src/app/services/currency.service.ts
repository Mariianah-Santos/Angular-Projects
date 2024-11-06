import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private backAPI = "https://api.exchangerate-api.com/v4/latest/";

  constructor(private httpClient: HttpClient) { }

  converter(base: string): Observable<any>{
    return this.httpClient.get(`${this.backAPI}${base}`);
  }
}
