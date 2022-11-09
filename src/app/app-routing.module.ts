import { GoalsModule } from './goals/goals.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./books/books.module').then((b)=>b.BooksModule)
  },
  {
    path:'names',
    loadChildren: ()=> import('./names/names.module').then((b)=>b.NamesModule)
  },
  {
    path:'goals',
    loadChildren: ()=> import('./goals/goals.module').then((b)=>b.GoalsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
