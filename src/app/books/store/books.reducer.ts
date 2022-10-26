import { createReducer } from '@ngrx/store';
import { Book } from './book';

export const initialState: ReadonlyArray<Book> =

// [];
[{
  "id": 1,
  "name": "Harry Potter and the Philosopher's Stone",
  "author": "J. K. Rowling",
  "cost": 300
},
{
  "id": 2,
  "name": "Harry Potter and the Philosopher's Stone",
  "author": "J. K. Rowling",
  "cost": 300
},
{
  "id": 3,
  "name": "Harry Potter and the Philosopher's Stone",
  "author": "J. K. Rowling",
  "cost": 300
},
{
  "id": 4,
  "name": "Harry Potter and the Philosopher's Stone",
  "author": "J. K. Rowling",
  "cost": 300
}];

export const bookReducer = createReducer(initialState)

// export class BooksReducer {
// }
