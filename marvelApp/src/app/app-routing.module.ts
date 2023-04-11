import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ComicsComponent } from './component/comics/comics.component'

const routes: Routes = [

  {
    path: '',
    redirectTo:'/comics',
    pathMatch:'full'
  },
  {
    path:'comics',
    component:ComicsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
