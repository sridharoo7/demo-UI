import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent{
  
  @Input() dataSource: any = [];
  @Input() displayedColumns: string[] = [];

  @Output() editEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();

  onClick(element: any){
    this.editEvent.emit(element.id);
  }

  onDelete(element: any){
    this.deleteEvent.emit(element.id);
  }

}
