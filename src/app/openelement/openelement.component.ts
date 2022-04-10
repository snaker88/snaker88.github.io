import { Component, OnInit } from '@angular/core';
import { Company, DatabaseService } from '../services/database.service';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-openelement',
  templateUrl: './openelement.component.html',
  styleUrls: ['./openelement.component.scss']
})

export class OpenelementComponent implements OnInit {

  company: Company[] = []
  id: string

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private database: DatabaseService) {

  }

  ngOnInit(): void {
 
    this.route.params.subscribe((params: Params)=>{
      console.log(Object.values(params)[0])
      this.id = Object.values(params)[0]
    })
   

    this.http.get<Company[]>('https://fir-19a39-default-rtdb.firebaseio.com/todos/'+ this.id +'.json')
    .pipe(map(company =>{
      this.company = Object.values(company)
      console.log(this.company)
    })).subscribe()

    
  }

}
