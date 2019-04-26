import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: Employee;
  constructor() { }

  saveEmployee(emp: Employee) {
    this.employee = emp;

  }
  getEmployee() {
    return this.employee;
  }


}
