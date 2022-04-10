import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'

import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



const MaterialComponent=[
  MatButtonModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule
]

@NgModule({

  declarations: [],

  imports: [ MaterialComponent ],

  exports: [ MaterialComponent ]
})
export class MaterialModule { }
