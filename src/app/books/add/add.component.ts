import { Store } from '@ngrx/store';
import { Book } from './../store/book';
import { Component, OnInit } from '@angular/core';
import { addNewBookAPI } from '../store/books.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  bookForm: Book = {
    id: 0,
    name: '',
    author : '',
    cost: 0
  }

  save(){
    this.store.dispatch(addNewBookAPI({payload: {...this.bookForm}}));
  }

}
