import {
  Router
} from '@angular/router';
import {
  Appstate
} from './../../shared/store/appstate';
import {
  Store
} from '@ngrx/store';
import {
  Book
} from './../store/book';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  addNewBookAPI
} from '../store/books.action';
import {
  getAppState
} from 'src/app/shared/store/app.selector';
import { setAppState } from 'src/app/shared/store/app.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private store: Store, private appState: Store < Appstate > , private router: Router) {}

  ngOnInit(): void {}

  bookForm: Book = {
    id: 0,
    name: '',
    author: '',
    cost: 0
  }

  save() {
    this.store.dispatch(addNewBookAPI({
      payload: {
        ...this.bookForm
      }
    }));
    let appStatus$ = this.appState.select(getAppState);
    appStatus$.subscribe((data) => {
      if (data.apiResponseMessage === "success") {
        this.appState.dispatch(setAppState({
          apiStatus: {
            apiStatus: '',
            apiResponseMessage: ''
          }
        }));
        this.router.navigate(['/']);
      }
    })
  }

}
