import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  categories = ['shoes','t-shirts','hoodies'];
  @Output() showCategory = new EventEmitter<string>();

  constructor() {  };

  ngOnInit(): void {  };

  onShowCategorie(category: string): void {
    this.showCategory.emit(category);
  };


}
