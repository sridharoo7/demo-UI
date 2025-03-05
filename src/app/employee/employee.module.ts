import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './store/employee.reducer';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature( 'empReducer', employeeReducer )
  ],
  exports: [
    EmployeeDashboardComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent
  ]
})
export class EmployeeModule { }
