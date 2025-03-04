import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEmployee } from '../model/employee.model';
import { createEmployee, editEmployee, getEmployees, removeEmployee } from '../store/employee.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private store: Store<{
    empReducer: {
      employees: IEmployee[],
      lastId: number,
      count: number
    }
  }>) { 
    this.getEmployee();
  }

  onCreate(emp: IEmployee) {
    this.store.dispatch(createEmployee({emp}));
  }

  onUpdate(emp: IEmployee) {
    this.store.dispatch(editEmployee({emp}));
  }

  onDelete(id: number) {
    this.store.dispatch(removeEmployee({id}));
  }

  getEmployee() {
    return this.store.select(state => state.empReducer.employees);
  }

  getEmployeeById(id: any) { 
    return this.store.select(state => state.empReducer.employees.filter(x=> x.id === id));
  }

  getLastId() {
    return this.store.select(state => state.empReducer.lastId);
  }

  getEmployeeCount() {
    return this.store.select(state => state.empReducer.count);
  }
}
