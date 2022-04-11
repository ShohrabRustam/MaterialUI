import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  displayFunc(subject:any){
    return subject ? subject.name : undefined;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
