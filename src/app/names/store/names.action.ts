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

export const getNamesSuccess = createAction("[Names API] getting all names SUCCESS", props < {
  allNames: Name[]
} > ())

export const saveNewName = createAction("[Names API] save a new name",
props < {
  payload: Name
} > ())

export const saveNameSuccess = createAction("[Names API] save new name SUCCESS",
props < {
  response: Name
} > ())
