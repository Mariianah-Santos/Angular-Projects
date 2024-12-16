import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agenda } from '../../Agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaServiceService implements OnInit {

  // baseApi = "http://localhost:3001/agenda";
  baseApi = 'http://localhost:8080/api/contacts';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
      
  }

  create(agenda: Agenda): Observable<Agenda> {
    return this.httpClient.post<Agenda>(this.baseApi, agenda);
  }

  readList(): Observable<Agenda[]> {
    return this.httpClient.get<Agenda[]>(this.baseApi);
  }

  edit(agenda: Agenda): Observable<Agenda> {
    const url = `${this.baseApi}/${agenda.id}`;
    return this.httpClient.put<Agenda>(url, agenda);
  }

  delet(id: string): Observable<Agenda> {
    const url = `${this.baseApi}/${id}`;
    return this.httpClient.delete<Agenda>(url);
  }

  getContactById(id: string) {
    const url = `${this.baseApi}${id}`
    return this.httpClient.get<Agenda>(url)
    // return this.httpClient.get<Agenda>(`http://localhost:3001/agenda/${id}`);
  }
 
}
