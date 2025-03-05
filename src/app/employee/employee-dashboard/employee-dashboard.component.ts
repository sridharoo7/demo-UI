import { Component, OnDestroy } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../model/employee.model';
import { Store } from '@ngrx/store';
import { selectEmployeeData } from '../store/employee.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent implements OnDestroy {
  empList$!: Observable<IEmployee[]>;

  constructor(private store: Store, private router: Router, private empService: EmployeeService) {
    this.empList$ = this.store.select(selectEmployeeData);
  }
  ngOnDestroy(): void {
    console.log('Called Destroy')
  }
  displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'address1', 'address2', 'city', 'state', 'dob', 'mobile', 'mail','Actions'];

  addEmployee() {
    console.log('add')
    this.router.navigate(['/employee/create']);
  }

  onEdit(event: any){
    this.router.navigate([`/employee/edit/${event}`]);
  }

  onDelete(event: any){
    this.empService.onDelete(event);
  }
}
