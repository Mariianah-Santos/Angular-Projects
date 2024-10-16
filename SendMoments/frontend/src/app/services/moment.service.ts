import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Moment } from '../Moment';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private httpClient: HttpClient) { }

  createMoment(formData: FormData): Observable<FormData> {
    return this.httpClient.post<FormData>(this.apiUrl, formData);
  }
}
