import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  
  sort: string = "Desc";
  itemsCount: number= 12;
  
  constructor() {  }
  
  ngOnInit(): void {
  }

  onSortUpdate(newSort: string): void {
    this.sort = newSort
  }

}
