import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  id?: string;
  name: string;
  description: string;
  manager:string;

  constructor() { }
}
