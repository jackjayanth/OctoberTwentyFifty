import { Component, OnInit } from '@angular/core';
import { Goal } from '../store/goal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goalForm: Goal = {
    id: null!,
    name: '',
    status: ''
  }

  update(){}
}
