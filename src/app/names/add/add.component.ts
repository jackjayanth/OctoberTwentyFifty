import {
  saveNewName
} from './../store/names.action';
import {
  Store
} from '@ngrx/store';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  nameYo: string= '';
  constructor(private store: Store) {}

  ngOnInit(): void {}

  save() {
    this.store.dispatch(saveNewName({
      payload: {
        id: 0,
        name: this.nameYo
      }
    }))
  }

}
