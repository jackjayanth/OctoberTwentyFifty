import { initialState } from './../shared/store/app.reducer';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Goal } from './store/goal';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  initialState: Goal[] = [{
    id: 1,
    name: "perfect angular",
    status: "working on it"
  },
  {
    id: 2,
    name: "meditate everyday",
    status: "working on it"
  },
  ]
  constructor() { }

  getAllGoals(){
    return of(this.initialState);
  }

  addAGoal(goal:Goal){
    let newID = this.initialState.length+1;
    let newGoal= {
      id: newID,
      name: goal.name,
      status: goal.status
    }
    let newState = [...this.initialState]
    newState.push(newGoal);
    this.initialState = newState;
    return of(this.initialState);
  }

  updateAGoal(id: number, goal:Goal){
    // this.initialState = this.initialState.map((g) => {
    //   if (g.id == goal.id){
    //     return goal
    //    }
    //    return g
    //  });
    // let updatingGoal = this.initialState.find((go)=> go.id == id);
    // console.log(updatingGoal)
    return of(goal);
  }
}
