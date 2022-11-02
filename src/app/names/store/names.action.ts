import {
  Name
} from './name';
import {
  props
} from '@ngrx/store';
import {
  createAction
} from '@ngrx/store';

export const getNamesAPI = createAction("[Names API] getting all names")

export const getNamesSuccess = createAction("[Names API] getting all names success", props < {
  allNames: Name[]
} > ())
