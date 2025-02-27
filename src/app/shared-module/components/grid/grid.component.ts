import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnChanges{
  
  @Input() dataSource: any = [];
  @Input() displayedColumns: any = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.dataSource,this.displayedColumns,changes['dataSource']);
  }

}
