import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor() { 
  }
  
  getLinguagens() {
    return ['java', 'php']
  }
}
