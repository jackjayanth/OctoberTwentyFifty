import {
  Goal
} from './goal';

import {
  createReducer,
  on
} from "@ngrx/store";
import {
  addANewGoalSuccess,
  getAllGoalsSuccess,
  updateAGoalSuccess
} from './goals.action';

export const initialState: Goal[] = [
  //   {
  //   name: "perfect angular",
  //   status: "working on it"
  // },
  // {
  //   name: "meditate everyday",
  //   status: "working on it"
  // },
]

export const GoalsReducer = createReducer(initialState,
  on(getAllGoalsSuccess, (state, {
    allGoals
  }) => {
    return allGoals;
  }),
  on(addANewGoalSuccess, (state, {
    response
  }) => {
    return response;
  }),
  on(updateAGoalSuccess, (state, {
    updateGoal
  }) => {
    let newState = state.filter((_) => _.id != updateGoal.id);
    newState.unshift(updateGoal);
    return newState;
    // return state;
  }),
)
