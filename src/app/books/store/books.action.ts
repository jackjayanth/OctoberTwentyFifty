import { Book } from './book';
import { createAction, props } from "@ngrx/store";


export const involeBooksAPI = createAction("[Books API] invoke books fetch API")

export const booksFetchAPISuccess = createAction("[Books API] invoke books success", props<{allBooks: Book[]}>())

