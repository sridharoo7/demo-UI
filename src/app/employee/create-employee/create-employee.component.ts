import { Component, OnInit, model } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { numberValidator, stringValidator } from '../../shared-module/validators/data-validation';
import { IEmployee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {

  formGroup!: FormGroup;
  toolTipPosition: TooltipPosition = "after";
  genders = [{ id: 1, type: 'Male' }, { id: 2, type: 'Female' }, { id: 3, type: 'other' }];


  constructor(private fb: FormBuilder, private empService: EmployeeService, private router:Router) {

  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      firstName: new FormControl('', [Validators.required, stringValidator]),
      lastName: new FormControl('', [Validators.required, stringValidator]),
      gender: new FormControl('', [Validators.required]),
      address1: new FormControl('', [Validators.required, stringValidator]),
      address2: new FormControl(''),
      city: new FormControl('', [Validators.required, stringValidator]),
      state: new FormControl('', [Validators.required, stringValidator]),
      dob: new FormControl('',[Validators.required]),
      mobile: new FormControl('',[Validators.required, numberValidator]),
      mail: new FormControl('',[Validators.required, Validators.email, stringValidator])
    })
  }

  onSave() {
     if(!this.formGroup.invalid) {
      let id = 0;
      let idSub = this.empService.getLastId().subscribe(x => {
        id = x + 1
      });
      let model: IEmployee = {
        id: id,
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
      this.empService.onCreate(model);
      idSub.unsubscribe();
      let sub = this.empService.getEmployeeById(id-1).subscribe(x=> {
        console.log(x);
      });
      sub.unsubscribe();
     }
     //this.router.navigate("./");
  }

  close() {
    // this.router.navigate("./");
  }

}
