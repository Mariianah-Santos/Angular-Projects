import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ToDoList } from '../ToDoList';
import { catchError, EMPTY, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListserviceService implements OnInit{

  baseUrl = "http://localhost:3001/list";
  message: string | null = null;
  isError: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      
  }
  createList(toDoList: ToDoList): Observable<ToDoList> { // cria uma nova tarefa
    return this.http.post<ToDoList>(this.baseUrl, toDoList).pipe(
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

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
      this.closeMessage();
    }, 3000);
  }

  closeMessage(): void {
    this.message = null;
  }

  readList(): Observable<ToDoList[]> {
    return this.http.get<ToDoList[]>(this.baseUrl);
  }

  editList(list: ToDoList): Observable<ToDoList> {
    const url = `${this.baseUrl}/${list.id}`;
    return this.http.put<ToDoList>(url, list);
  }

  delete(id: string | number): Observable<ToDoList> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<ToDoList>(url);
  }
}


