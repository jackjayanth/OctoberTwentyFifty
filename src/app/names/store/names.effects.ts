import { Router } from '@angular/router';
import {
  map,
  switchMap,
  tap
} from 'rxjs';
import {
  NamesService
} from './../names.service';
import {
  Actions,
  createEffect,
  ofType
} from '@ngrx/effects';
import {
  Injectable
} from "@angular/core";
import {
  getNamesAPI,
  getNamesSuccess,
  saveNameSuccess,
  saveNewName
} from './names.action';


@Injectable()
export class NamesEffects {

  constructor(private actions$: Actions, private namesService: NamesService, private route: Router) {}

  loadAllNames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getNamesAPI),
      switchMap(() => {
        return this.namesService.getNames()
          .pipe(
            map((data) => getNamesSuccess({
              allNames: data
            }))
          )
      })
    )
  );

  saveName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveNewName),
      tap(() => this.route.navigate(['/names'])),
      switchMap((action) => {
        return this.namesService.postName(action.payload)
          .pipe(
            map((data) => saveNameSuccess({
              response: data
            }))
          )
      })
    )
  )
}
