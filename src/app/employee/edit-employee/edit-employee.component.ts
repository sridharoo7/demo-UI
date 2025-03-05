import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { stringValidator, numberValidator } from '../../shared-module/validators/data-validation';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import { IEmployee } from '../model/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{

  formGroup!: FormGroup;
  toolTipPosition: TooltipPosition = "after";
  genders = [{ value: 'Male', type: 'Male' }, { value: 'Female', type: 'Female' }, { value: 'Other', type: 'Other' }];
  employee!: IEmployee;
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private empService: EmployeeService) {

  }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get("id")!;
    const empDataSub = this.empService.getEmployeeById(id).subscribe(x=> {
      if(x){
        this.employee = x[0];
      }
    })
    this.formGroup = this.fb.group({
      id: new FormControl(this.employee.id),
      firstName: new FormControl(this.employee.firstName, [Validators.required, stringValidator]),
      lastName: new FormControl(this.employee.lastName, [Validators.required, stringValidator]),
      gender: new FormControl(this.employee.gender, [Validators.required]),
      address1: new FormControl(this.employee.address1, [Validators.required, stringValidator]),
      address2: new FormControl(this.employee.address2),
      city: new FormControl(this.employee.city, [Validators.required, stringValidator]),
      state: new FormControl(this.employee.state, [Validators.required, stringValidator]),
      dob: new FormControl(this.employee.dob,[Validators.required]),
      mobile: new FormControl(this.employee.mobile,[Validators.required, numberValidator]),
      mail: new FormControl(this.employee.mail,[Validators.required, Validators.email, stringValidator])
    })
  }

  onUpdate() {
    if(!this.formGroup.invalid) {
      let model: IEmployee = {
        id: this.formGroup.get("id")?.value,
        firstName: this.formGroup.get("firstName")?.value,
        lastName: this.formGroup.get("lastName")?.value,
        gender: this.formGroup.get("gender")?.value,
        address1: this.formGroup.get("address1")?.value,
        address2: this.formGroup.get("address2")?.value,
        city: this.formGroup.get("city")?.value,
        state: this.formGroup.get("state")?.value,
        dob: this.formGroup.get("dob")?.value,
        mobile: this.formGroup.get("mobile")?.value,
        mail: this.formGroup.get("mail")?.value,
      }
      this.empService.onUpdate(model);
     }
     this.router.navigate(["/employee"]);
  }

  close() {
    this.router.navigate(["/employee"]);
  }
}
