import { Appstate } from './appstate';
import { createFeatureSelector } from '@ngrx/store';


export const getAppState= createFeatureSelector<Appstate>("myappstate")
