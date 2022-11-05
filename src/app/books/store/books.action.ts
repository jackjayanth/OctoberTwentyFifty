import { Book } from './book';
import { createAction, props } from "@ngrx/store";


export const involeBooksAPI = createAction("[Books API] invoke books fetch API")

export const booksFetchAPISuccess = createAction("[Books API] invoke books success", props<{allBooks: Book[]}>())

export const addNewBookAPI = createAction("[Books API] adding a new book", props<{payload: Book}>())

export const addNewBookSuccessAPI = createAction("[Books API] adding a new book success", props<{response: Book}>())
