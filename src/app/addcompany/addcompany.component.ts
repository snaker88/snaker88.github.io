import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Company } from '../services/database.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.scss']
})
export class AddcompanyComponent implements OnInit {

  add_company: FormGroup

  constructor(private http: HttpClient,
    private database: DatabaseService) { }

  ngOnInit(): void {
    this.add_company = new FormGroup({
      name: new FormControl('CUCUMBER COMPANY'),
      manager: new FormControl('Fedor Okeanov'),
      description: new FormControl('add description')
    })

  }

  submit(){
    const company: Company = {
      name: this.add_company.value.name,  
      descr: this.add_company.value.description,
      manager: this.add_company.value.manager
    }
    this.http.post<Company>(this.database.list_url, company).subscribe()
    console.log(this.add_company.value.title)
  }

}
