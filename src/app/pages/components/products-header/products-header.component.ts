import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl:'products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  sort = 'desc';
  itemShowCount=12;
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  ngOnInit(): void{}

  onSortUpdated(newSort: string): void{
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemUpdated(count: number): void{
    this.itemShowCount = count;
    this.itemsCountChange.emit(count);

  }

  onColumnUpdated(colsNum: number): void{
    this.columnsCountChange.emit(colsNum);

  }

}
