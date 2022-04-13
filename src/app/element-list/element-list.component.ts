import { Component, OnInit } from '@angular/core';
import { Company } from '../services/database.service';
import { DatabaseService } from '../services/database.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss']
})



export class ElementListComponent implements OnInit {

  company: Company[] = []
  n: number

  constructor(
    private database: DatabaseService,
    private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Company[]>(this.database.list_url)
    .pipe(map(company =>{
      this.company =  Object.keys(company).map(key=>({id: key, ...company[key]}))
    })).subscribe()    
  }

  delete(id?: string){
    console.log('hi, boy', id)
    this.http.delete('https://fir-19a39-default-rtdb.firebaseio.com/todos/'+id+'.json').subscribe( ()=>{ this.company = this.company.filter(t=>t.id !==id)})
  }

}
