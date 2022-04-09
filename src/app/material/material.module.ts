import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'

import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatIconModule} from '@angular/material/icon';

const MaterialComponent=[
  MatButtonModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
]

@NgModule({

  declarations: [],

  imports: [ MaterialComponent ],

  exports: [ MaterialComponent ]
})
export class MaterialModule { }
