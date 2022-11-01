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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
