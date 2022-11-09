import {
  setAppState
} from './../../shared/store/app.action';
import {
  Appstate
} from './../../shared/store/appstate';
import {
  Store
} from '@ngrx/store';
import {
  Router
} from '@angular/router';
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
  addNewBookSuccessAPI,
  invokeUpdateBookAPI,
  updateBookAPISucess
} from './books.action';
import {
  EMPTY,
  map,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs';
import {
  selectBooks
} from './books.selector';

@Injectable()
export class BooksEffects {

  constructor(private action$: Actions, private booksService: BooksService, private route: Router, private appState: Store < Appstate > , private store: Store) {}

  loadAllBooks$ = createEffect(() =>
    this.action$.pipe(
      ofType(involeBooksAPI),
      withLatestFrom(this.store.select(selectBooks)),
      switchMap(([, booksFromStore]) => {
        if (booksFromStore.length > 0) {
          return EMPTY;
        }
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
      // tap(() => this.route.navigate(['/'])),
      switchMap((action) => {
        this.appState.dispatch(setAppState({
          apiStatus: {
            apiStatus: '',
            apiResponseMessage: ''
          }
        }));
        return this.booksService.create(action.payload)
          .pipe(
            map((data) => {
              this.appState.dispatch(setAppState({
                apiStatus: {
                  apiStatus: '',
                  apiResponseMessage: 'success'
                }
              }));
              return addNewBookSuccessAPI({
                response: data
              })
            })

          )
      })
    )
  );

  updateBook$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeUpdateBookAPI),
      // tap(() => this.route.navigate(['/'])),
      switchMap((action) => {
        this.appState.dispatch(setAppState({
          apiStatus: {
            apiStatus: '',
            apiResponseMessage: ''
          }
        }));
        return this.booksService.update(action.updateBook)
          .pipe(
            map((data) => {
              this.appState.dispatch(setAppState({
                apiStatus: {
                  apiStatus: '',
                  apiResponseMessage: 'success'
                }
              }));
              return updateBookAPISucess({
                updateBook: data
              })
            })

          )
      })
    )
  );

}
