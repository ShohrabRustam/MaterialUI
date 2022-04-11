import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

}
