import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Company } from '../services/database.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.scss']
})
export class AddcompanyComponent implements OnInit {

  addcompany: FormGroup

  constructor(private http: HttpClient,
    private database: DatabaseService) { }

  ngOnInit(): void {
    this.addcompany = new FormGroup({
      name: new FormControl('', Validators.required),
      manager: new FormControl('', Validators.required),
      description: new FormControl('')
    })

  }

  submit(){
    const company: Company = {
      name: this.addcompany.value.name,  
      descr: this.addcompany.value.description,
      manager: this.addcompany.value.manager
    }
    this.http.post<Company>(this.database.list_url, company).subscribe()
    console.log(this.addcompany.value.title)

    this.addcompany.reset()
  }

}
