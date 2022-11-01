import {
  BooksService
} from './../books.service';
import {
  Injectable
} from '@angular/core';
import {
  Actions,
  createEffect,
  ofType
} from '@ngrx/effects';
import {
  involeBooksAPI,
  booksFetchAPISuccess
} from './books.action';
import {
  map,
  switchMap
} from 'rxjs';

@Injectable()
export class BooksEffects {

  constructor(private action$: Actions, private booksService: BooksService) {}

  loadAllBooks$ = createEffect(() =>
    this.action$.pipe(
      ofType(involeBooksAPI),
      switchMap(()=>{
        return this.booksService.get()
        .pipe(
          map((data)=> booksFetchAPISuccess({allBooks: data}))
        )
      })
    )
  );


}
