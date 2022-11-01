import { Name } from './name';
import {
  createFeatureSelector
} from '@ngrx/store';


export const getNames = createFeatureSelector<Name[]>("myNames")
