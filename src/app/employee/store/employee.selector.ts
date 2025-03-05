import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IEmployeeStore } from "./employee.store";

export const selectEmployeeState = createFeatureSelector<IEmployeeStore>('empReducer');

export const selectEmployeeData = createSelector(
    selectEmployeeState,
    (state: IEmployeeStore) => state.employees.filter(x=>x.id)
);