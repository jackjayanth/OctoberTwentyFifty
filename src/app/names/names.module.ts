import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NamesRoutingModule } from './names-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { NamesReducer } from './store/names.reducer';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NamesRoutingModule,
    StoreModule.forFeature("myNames", NamesReducer),
  ]
})
export class NamesModule { }
