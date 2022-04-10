import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { ElementListComponent } from './element-list/element-list.component';
import { OpenelementComponent } from './openelement/openelement.component';

const routes: Routes = [
  {path:'', component: ElementListComponent},
  {path:'add-company', component: AddcompanyComponent},
  {path:'company/:?id', component: OpenelementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
