import { Component, OnInit } from '@angular/core';


const  ROWS_HEIGHT: { [id:number]: number } = {
  1: 400,
  3: 335,
  4: 350,
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  cols: number = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  constructor() {  };

  ngOnInit(): void {
    
  };

  onColumsCountChange(colsNbr: number): void {
    this.cols = colsNbr;
    this.rowHeight = ROWS_HEIGHT[this.cols];

  };


  onShowCategory(newCtg: string) {
    this.category = newCtg;
  }


}
