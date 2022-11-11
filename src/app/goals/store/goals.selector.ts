import { Goal } from './goal';
import { createFeatureSelector } from '@ngrx/store';


export const getGoals = createFeatureSelector<Goal[]>("allGoals");
