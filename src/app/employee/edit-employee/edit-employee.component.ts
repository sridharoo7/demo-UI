import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { stringValidator, numberValidator } from '../../shared-module/validators/data-validation';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css'
})
export class EditEmployeeComponent implements OnInit{

  formGroup!: FormGroup;
  toolTipPosition: TooltipPosition = "after";
  genders = [{ id: 1, type: 'Male' }, { id: 2, type: 'Female' }, { id: 3, type: 'other' }];

  constructor(private fb: FormBuilder) {

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

  onUpdate() {

  }

  close() {

  }
}
