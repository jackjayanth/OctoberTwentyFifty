import {
  createReducer,
  on
} from '@ngrx/store';
import {
  Name
} from './name';
import {
  getNamesSuccess, saveNameSuccess
} from './names.action';

export const initialState: ReadonlyArray < Name > = [];

// [{
//     "id": 1,
//     "name": "Jay"
//   },
//   {
//     "id": 2,
//     "name": "Lauren"
//   },
//   {
//     "id": 3,
//     "name": "Madhuri"
//   }
// ]


export const NamesReducer = createReducer(initialState,
  on(getNamesSuccess, (state, {
    allNames
  }) => {
    return allNames;
  }),
  // on(saveNameSuccess, (state, {
  //   response
  // } => {
  //   let newState = [...state]
  //   newState.unshift(response)
  //   return newState
  // }))
  on(saveNameSuccess, (state, {
    response
  }) => {
    let newState = [...state]
    newState.unshift(response)
    return newState
  })
)
