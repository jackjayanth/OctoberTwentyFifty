import { updateAGoal } from './../store/goals.action';
import { Store } from '@ngrx/store';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Goal
} from '../store/goal';
import { addANewGoal } from '../store/goals.action';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {

    // this.store.dispatch(updateAGoal({ id:2 ,
    //   payload: {
    //       id: 2,
    //       name: "updated",
    //       status: "updated"
    //   }
    // }))

  }

  goalForm: Goal = {
    id: null!,
    name: '',
    status: ''
  }

  save(){
    this.store.dispatch(addANewGoal({
      payload: {
        ...this.goalForm
      }
    }));
  }

  update(){
     this.store.dispatch(updateAGoal({ id:2 ,
      payload: {
          id: 2,
          name: "updated",
          status: "updated"
      }
    }))
  }

}
