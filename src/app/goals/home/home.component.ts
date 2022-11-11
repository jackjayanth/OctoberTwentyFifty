import { Goal } from './../store/goal';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { getGoals } from '../store/goals.selector';
import { getAllGoals } from '../store/goals.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allGoals: any;
  constructor( private store: Store) { }

  ngOnInit(): void {
    this.allGoals = this.store.select(getGoals);
    this.store.dispatch(getAllGoals())
  }

}
