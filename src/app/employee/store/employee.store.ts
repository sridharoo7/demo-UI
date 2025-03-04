import { IEmployee } from "../model/employee.model";

interface IEmployeeStore {
    employees: IEmployee[],
    lastId: number,
    count: number
}

export const initialState: IEmployeeStore = {
    employees: [{id: 1, firstName: 'sri', lastName: 'ch', address1: '1026 San Jacinto', address2: 'Apt 1728', city: 'irving', state: 'texas', gender: 1, dob: new Date().toDateString(), mobile: '4302953254', mail: 'sri.ch@gmail.com' }],
    lastId: 1,
    count: 1
};