import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'

import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge';



const MaterialComponent=[
  MatButtonModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule
]

@NgModule({

  declarations: [],

  imports: [ MaterialComponent ],

  exports: [ MaterialComponent ]
})
export class MaterialModule { }
