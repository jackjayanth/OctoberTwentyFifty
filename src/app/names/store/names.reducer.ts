import { createReducer } from '@ngrx/store';
import { Name } from './name';
export const initialState: ReadonlyArray<Name> = [{
  "id": 1,
  "name": "Jay"
},
{
  "id": 2,
  "name": "Lauren"
},
{
  "id": 3,
  "name": "Mahuri"
}]


export const NamesReducer = createReducer(initialState)
