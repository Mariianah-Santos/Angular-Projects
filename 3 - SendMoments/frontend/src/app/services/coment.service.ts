import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Response } from '../Response';
import { Coment } from '../Coment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentService {

  private baseUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseUrl}api/moments`;

  constructor(private httpClient: HttpClient) { }

  createComment(data: Coment): Observable<Response<Coment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.httpClient.post<Response<Coment>>(url, data)
  } 
}
