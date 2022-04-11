import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sanckbar',
  templateUrl: './sanckbar.component.html',
  styleUrls: ['./sanckbar.component.css']
})
export class SanckbarComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  openSnakeBar(message: any, action: any) {
    let snackBarRef = this.snackBar.open(message, action,{duration:2000});
    snackBarRef.afterDismissed().subscribe(() => {
      console.log("The sanckBar was dismissed ");
    });
    snackBarRef.onAction().subscribe(()=>{
      console.log("The SankeBar Was triggered !");
    })
  }

}
