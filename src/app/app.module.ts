import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementListComponent } from './element-list/element-list.component';
import { ArchiveComponent } from './archive/archive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { OpenelementComponent } from './openelement/openelement.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementListComponent,
    ArchiveComponent,
    AddcompanyComponent,
    OpenelementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
