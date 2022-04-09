import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'

import {MatButtonToggleModule} from '@angular/material/button-toggle';


const MaterialComponent=[
  MatButtonModule,
  MatButtonModule,
  MatButtonToggleModule
]

@NgModule({

  declarations: [],

  imports: [ MaterialComponent ],

  exports: [ MaterialComponent ]
})
export class MaterialModule { }
