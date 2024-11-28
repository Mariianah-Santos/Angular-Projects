import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Pessoa } from '../interface/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ListPeopleService  {

  // Endpoints criado para armazenar os dados
  baseApi = "http://localhost:3001/people";


  // Variaveis criada para mostra mensagens de erros
  message: string | null = null;
  isError: boolean = false;

  constructor(private httpClient: HttpClient) { }


  // função criada para pegar os dados enviados do usuarios para ser armazenado na API
  createPerson(pessoa: Pessoa): Observable<Pessoa> {
    return this.httpClient.post<Pessoa>(this.baseApi, pessoa).pipe(
      map(obj => obj), 
      catchError(e => this.errorHandler(e))
    );
  }

  // função criada para mostra mensagens de erros
  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro", true);
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

  // Funçao criada para chama toda a list de pessoas cadastradas
  getPeople(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(this.baseApi).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }


  // função para editar dados
  edit(list: Pessoa): Observable<Pessoa> {
    const url = `${this.baseApi}/${list.id}`;
    return this.httpClient.put<Pessoa>(url, list);
  }

  // função para deleta
  delet(id: string): Observable<Pessoa> {
    const url = `${this.baseApi}/${id}`;
    return this.httpClient.delete<Pessoa>(url);
  }

}
