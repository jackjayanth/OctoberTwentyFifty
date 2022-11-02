import {
  map,
  switchMap
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
  getNamesSuccess
} from './names.action';


@Injectable()
export class NamesEffects {

  constructor(private actions$: Actions, private namesService: NamesService) {}

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
}
