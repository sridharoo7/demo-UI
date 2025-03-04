import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent{
  
  @Input() dataSource: any = [];
  @Input() displayedColumns: any = [];

}
