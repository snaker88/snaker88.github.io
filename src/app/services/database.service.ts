import { Injectable } from '@angular/core';

export interface Company{
  name: string,  
  descr: string, 
  id?: string,
  manager: string
}

@Injectable({
  providedIn: 'root'
})


export class DatabaseService {

  list_url = 'https://fir-19a39-default-rtdb.firebaseio.com/todos.json'

  company: Company[] = []

  constructor() { }

}
