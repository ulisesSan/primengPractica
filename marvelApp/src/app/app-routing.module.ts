import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ComicsComponent } from './component/comics/comics.component'
import { CharactersComponent } from './component/characters/characters.component';
import { ComicsInfoComponent } from './component/comics/comics-info/comics-info.component'

const routes: Routes = [

  {
    path: '',
    redirectTo:'/comics',
    pathMatch:'full'
  },
  {
    path:'comics',
    component:ComicsComponent
  },
  {
    path:'characters',
    component:CharactersComponent
  },
  {
    path: 'comicinfo/:id',
    component:ComicsInfoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
