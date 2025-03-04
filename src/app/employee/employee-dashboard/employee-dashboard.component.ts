import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../model/employee.model';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent {
  empList: IEmployee[] = [];

constructor(private empService: EmployeeService){
  let empSub = this.empService.getEmployee().subscribe((x)=>{
    if(x){
     this.empList = x;
     console.log(this.empList,x);
    }
  })
  empSub.unsubscribe();
}
  displayedColumns: string[] = ['firstName', 'lastName', 'gender','address1','address2','city','state','dob','mobile','mail'];
}
