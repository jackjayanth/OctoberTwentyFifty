import { Router } from '@angular/router';
import {
  EMPTY,
  map,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs';
import {
  GoalsService
} from './../goals.service';
import {
  Injectable
} from "@angular/core";
import {
  Actions,
  createEffect,
  ofType
} from "@ngrx/effects";
import {
  addANewGoal,
  addANewGoalSuccess,
  getAllGoals,
  getAllGoalsSuccess,
  updateAGoal,
  updateAGoalSuccess
} from "./goals.action";
import { state } from '@angular/animations';


@Injectable()
export class GoalsEffects {
  constructor(private action$: Actions, private goalsService: GoalsService, private router: Router) {}


  loadAllGoals$ = createEffect(() =>
    this.action$.pipe(
      ofType(getAllGoals),
      switchMap(() => {
        return this.goalsService.getAllGoals()
          .pipe(
            map((data) => getAllGoalsSuccess({
              allGoals: data
            }))
          )
      })
    )
  );

  AddNewGoal$ = createEffect(() =>
    this.action$.pipe(
      ofType(addANewGoal),
      tap(() => this.router.navigate(['/goals'])),
      switchMap((action) => {
        return this.goalsService.addAGoal(action.payload)
          .pipe(
            map((data) => {
              return addANewGoalSuccess({
                response: data
              })
            })
          )
      })
    )
  )

  // UpdateAGoal$ = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(updateAGoal),
  //     // tap(() => this.router.navigate(['/goals'])),
  //     switchMap((action) => {
  //       return this.goalsService.updateAGoal(action.id, action.payload)
  //         .pipe(
  //           map((data) => {
  //             return updateAGoalSuccess({
  //               updateGoal: data
  //             })
  //           })
  //         )
  //     })
  //   )
  // )

  updateAGoals$ = createEffect(() =>
  this.action$.pipe(
    ofType(updateAGoal),
    switchMap((action) => {
      return this.goalsService.updateAGoal(action.id, action.payload)
        .pipe(
          map((data) => updateAGoalSuccess({
            updateGoal: data
          }))
        )
    })
  )
);

}
