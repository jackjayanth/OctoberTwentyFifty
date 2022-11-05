import {
  Appstate
} from './appstate';
import {
  props
} from '@ngrx/store';
import {
  createAction
} from '@ngrx/store';

export const setAppState = createAction("[API] set success or failure status", props < {
  apiStatus: Appstate
} > ())
