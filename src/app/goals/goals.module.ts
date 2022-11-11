import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { StoreModule } from '@ngrx/store';
import { GoalsReducer } from './store/goals.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GoalsEffects } from './store/goals.effects';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    GoalsRoutingModule,
    StoreModule.forFeature("allGoals", GoalsReducer),
    EffectsModule.forFeature([GoalsEffects]),
    FormsModule
  ]
})
export class GoalsModule { }
