import { createReducer, on } from "@ngrx/store";
import { initialState } from "./employee.store";
import { createEmployee, editEmployee, getEmployees, removeEmployee } from "./employee.actions";

export const employeeReducer = createReducer(initialState,
    on(getEmployees, (state) => {
        return {
            ...state,
            count: state.employees.length
        }
    }),
    on(createEmployee, (state, {emp}) => {
        return {
            ...state,
            employees: [...state.employees, emp],
            lastId: state.lastId + 1
        }
    }),
    on(editEmployee, (state, {emp}) => ({
        ...state, 
        employees: state.employees.map(x=> x.id === emp.id ? emp : x)
    })),
    on(removeEmployee, (state, {id}) => ({
        ...state,
        employees: state.employees.filter(x=>x.id !== id),
        count : state.count > 0 ? state.count -1 : 0
    }))
)

