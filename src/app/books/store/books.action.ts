import {
  Book
} from './book';
import {
  createAction,
  props
} from "@ngrx/store";


export const involeBooksAPI = createAction("[Books API] invoke books fetch API")

export const booksFetchAPISuccess = createAction("[Books API] invoke books success", props < {
  allBooks: Book[]
} > ())

export const addNewBookAPI = createAction("[Books API] adding a new book", props < {
  payload: Book
} > ())

export const addNewBookSuccessAPI = createAction("[Books API] adding a new book success", props < {
  response: Book
} > ())

export const invokeUpdateBookAPI = createAction("[Books API] invoke update book API", props < {
  updateBook: Book
} > ())

export const updateBookAPISucess = createAction(
  '[Books API] update  book api success',
  props < {
    updateBook: Book
  } > ()
);
