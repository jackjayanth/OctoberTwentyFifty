import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from './../store/book';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { selectBookById } from '../store/books.selector';
import { invokeUpdateBookAPI } from '../store/books.action';
import { getAppState } from 'src/app/shared/store/app.selector';
import { setAppState } from 'src/app/shared/store/app.action';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route : ActivatedRoute, private store: Store, private router: Router, private appStore: Store) { }

  ngOnInit(): void {
    let fetchData$ = this.route.paramMap.pipe(
      switchMap((params) => {
        var id = Number(params.get('id'));
        return this.store.pipe(select(selectBookById(id)));
      })
    );

    fetchData$.subscribe((data)=>{
      if(data){
      this.bookForm = {...data}
      }
      else{
        this.router.navigate(['/']);
      }
    })
  }

  bookForm: Book = {
    id: 0,
    name: '',
    author: '',
    cost: 0
  }

  update() {
    this.store.dispatch(
      invokeUpdateBookAPI({ updateBook: { ...this.bookForm } })
    );
    let apiStatus$ = this.appStore.pipe(select(getAppState));
    apiStatus$.subscribe((apState) => {
      if (apState.apiResponseMessage == 'success') {
        this.appStore.dispatch(
          setAppState({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
        );
        this.router.navigate(['/']);
      }
    });
  }

}
