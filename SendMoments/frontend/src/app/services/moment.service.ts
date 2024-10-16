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

  getMoment(): Observable<Response<Moment[]>> {
    return this.httpClient.get<Response<Moment[]>>(this.apiUrl);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.httpClient.post<FormData>(this.apiUrl, formData);
  }
}
