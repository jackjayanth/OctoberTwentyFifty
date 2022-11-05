import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NamesRoutingModule } from './names-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { NamesReducer } from './store/names.reducer';
import { NamesEffects } from './store/names.effects';
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    NamesRoutingModule,
    FormsModule,
    StoreModule.forFeature("myNames", NamesReducer),
    EffectsModule.forFeature([NamesEffects])
  ]
})
export class NamesModule { }
