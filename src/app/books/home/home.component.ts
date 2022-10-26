import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBooks } from '../store/books.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }

  books$ = this.store.select(selectBooks);

  ngOnInit(): void {
  }

}
