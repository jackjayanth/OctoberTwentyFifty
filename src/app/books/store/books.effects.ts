import { Router } from '@angular/router';
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
  booksFetchAPISuccess,
  addNewBookAPI,
  addNewBookSuccessAPI
} from './books.action';
import {
  map,
  switchMap,
  tap
} from 'rxjs';

@Injectable()
export class BooksEffects {

  constructor(private action$: Actions, private booksService: BooksService, private route: Router) {}

  loadAllBooks$ = createEffect(() =>
    this.action$.pipe(
      ofType(involeBooksAPI),
      switchMap(() => {
        return this.booksService.get()
          .pipe(
            map((data) => booksFetchAPISuccess({
              allBooks: data
            }))
          )
      })
    )
  );

  saveBook$ = createEffect(() =>
    this.action$.pipe(
      ofType(addNewBookAPI),
      tap(() => this.route.navigate(['/'])),
      switchMap((action) => {
        return this.booksService.create(action.payload)
          .pipe(
            map((data) =>
            addNewBookSuccessAPI({
              response: data
            })
            )

          )
      })
    )
  );

}
