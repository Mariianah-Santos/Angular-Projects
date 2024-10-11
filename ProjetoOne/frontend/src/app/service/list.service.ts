import { Animal } from './../Animal';


import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private baseUrl = "http://localhost:3000/animals";

  constructor(private http: HttpClient) { }

  remove(id: string) {
    return this.http.delete<Animal>(`${this.baseUrl}/${id}`);
  }

  // remove(animals: Animal[], animal: Animal) {
  //   // return animals.filter((a) => animal.name !== a.name);
  // }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.baseUrl);
  }

  getItem(id: string | null): Observable<Animal> {
    return this.http.get<Animal>(`${this.baseUrl}/${id}`);
  }
}
