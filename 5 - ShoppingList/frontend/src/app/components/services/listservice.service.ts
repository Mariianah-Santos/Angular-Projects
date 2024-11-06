import { Injectable } from '@angular/core';
import { catchError, map, Observable, EMPTY } from 'rxjs';
import { ListProduct } from '../ListProduct';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListserviceService {

  baseUrl = "http://localhost:3001/ListProduct";
  message: string | null = null;
  isError: boolean = false;

  constructor(private httpClient: HttpClient) { }

  createProduct(listproduct: ListProduct): Observable<ListProduct> {
    return this.httpClient.post<ListProduct>(this.baseUrl, listproduct).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  errorHandler(e: any): Observable <any>{
    this.showMessage('Ocorreu um error', true);
    return EMPTY
  }   
  
  showMessage(msg: string, isError: boolean = false): void {
    this.message = msg;
    this.isError = isError;
  }
}


