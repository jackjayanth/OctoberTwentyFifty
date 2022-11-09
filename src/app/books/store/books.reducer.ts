import {
  createReducer,
  on
} from '@ngrx/store';
import {
  Book
} from './book';
import {
  addNewBookSuccessAPI,
  booksFetchAPISuccess,
  updateBookAPISucess
} from './books.action';

export const initialState: ReadonlyArray < Book > = [];

export const bookReducer = createReducer(initialState,
  on(booksFetchAPISuccess, (state, {
    allBooks
  }) => {
    return allBooks;
  }),
  on(addNewBookSuccessAPI, (state, {
    response
  }) => {
    let newState = [...state]
    newState.unshift(response)
    return newState
  }),
  on(updateBookAPISucess, (state, { updateBook }) => {
    let newState = state.filter((_) => _.id != updateBook.id);
    newState.unshift(updateBook);
    return newState;
  })
)
