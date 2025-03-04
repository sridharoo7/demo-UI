import { createAction, props } from "@ngrx/store";
import { IEmployee } from "../model/employee.model";

export const createEmployee = createAction('create-employee', props<{ emp: IEmployee }>());
export const editEmployee = createAction('edit-employee', props<{ emp: IEmployee }>());
export const removeEmployee = createAction('remove-employee', props<{ id: number }>());
export const getEmployees = createAction('get-employees');