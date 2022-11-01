import { Name } from './../store/name';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { getNames } from '../store/names.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private store: Store<Name>) { }

  names$ = this.store.select(getNames);

  ngOnInit(): void {
    console.log(this.names$)
  }

}
