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
    // return response;

    // let newState = [...state, response]
    // console.log("reducer alli added")
    // console.log(newState)
    // newState.unshift(response)
    // return newState

    return [response]
  }),
  on(updateAGoalSuccess, (state, {
    updateGoal
  }) => {
    // let newState = state.filter((_) => _.id != updateGoal.id);
    // newState.unshift(updateGoal);
    // return newState;
    console.log('state')
    console.log(state)
    console.log('updateGoal')
    console.log(updateGoal)
    return updateGoal;
  }),
)
