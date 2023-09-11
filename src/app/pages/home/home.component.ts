import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  cols: number = 3;
  
  constructor() {  };

  ngOnInit(): void {
    
  };

  onColumsCountChange(colsNbr: number): void {
    this.cols = colsNbr;
  };


  onShowCategory(haha: string) {
    
  }


}
