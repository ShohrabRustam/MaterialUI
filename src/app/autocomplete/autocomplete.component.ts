import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';




@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})

export class AutocompleteComponent implements OnInit {

  options:string[]=["Angular", "React", "Vue"];
  objectOptions=[
    {name:"Angular"},
    {name:"Angular Material"},
    {name:"React"},
    {name:"Vue"}

  ]
  constructor() { }
  myControl=new FormControl();

  filterOptions= Observable<string[]>;



  displayFunc(subject:any){
    return subject ? subject.name : undefined;
  }



}
