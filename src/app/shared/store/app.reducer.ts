import {
  Appstate
} from './appstate';
import {
  createReducer,
  on
} from "@ngrx/store";
import {
  setAppState
} from './app.action';


export const initialState: Appstate = {
  apiStatus: '',
  apiResponseMessage: ''
}

export const AppReducer = createReducer(initialState,
  on(setAppState, (state, {
    apiStatus
  }) => {
    return apiStatus;
  })
)
