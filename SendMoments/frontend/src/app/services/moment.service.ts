import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Moment } from '../Moment';
import { Response } from '../Response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private httpClient: HttpClient) { }

  getMoments(): Observable<Response<Moment[]>> {
    return this.httpClient.get<Response<Moment[]>>(this.apiUrl);
  }

  getMoment(id: number): Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`
    return this.httpClient.get<Response<Moment>>(url);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.httpClient.post<FormData>(this.apiUrl, formData);
  }

  removeMoment(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.delete(url);
  }

  updateMoment(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.put<FormData>(url, formData);
  }
}
