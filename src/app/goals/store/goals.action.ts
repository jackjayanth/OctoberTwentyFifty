import { Goal } from './goal';
import { createAction, props } from "@ngrx/store";




export const getAllGoals = createAction("[GOALS API] getting all goals");

export const getAllGoalsSuccess = createAction("[GOALS API] getting all goals success", props<{allGoals: Goal[]}>())

export const addANewGoal = createAction("[GOALS API] adding a new goal", props<{payload: Goal}>())

export const addANewGoalSuccess = createAction("[GOALS API] adding a new goal success", props<{response: Goal}>())

export const updateAGoal = createAction("[GOALS API] updating a goal", props<{id: number, payload: Goal}>())

export const updateAGoalSuccess = createAction("[GOALS API] updating a goal success", props<{updateGoal: Goal[]}>())
