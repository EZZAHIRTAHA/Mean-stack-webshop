import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  
  sort: string = "Desc";
  itemsCount: number= 12;
  @Output() columnsCount = new EventEmitter<number>();

  constructor() {  }
  
  ngOnInit(): void {
  }

  onSortUpdate(newSort: string): void {
    this.sort = newSort
  }
  onItem (count: number): void  {
    this.itemsCount = count
  }

  onColumsUpdated(colsNum: number): void {
    this.columnsCount.emit(colsNum);
  }
}
