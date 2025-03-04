import { FormControl, ValidationErrors } from "@angular/forms";

export function numberValidator(control: FormControl): ValidationErrors | null {
    return (!isNaN(control?.value) && (control.value % control?.value === 0)) ? null :  { NaN : true};
}

export function stringValidator(control: FormControl): ValidationErrors | null {
    return (isNaN(control?.value) && (typeof control.value === 'string')) ? null :  { NaS : true};
}