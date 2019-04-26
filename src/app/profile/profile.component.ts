import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 employee: Employee;
  name: string;
  id: string;

  constructor(private emplService: EmployeeService) { }

  ngOnInit() {
    this.employee = this.emplService.getEmployee();

    this.name = this.employee.name;
    this.id = this.employee.id;
    console.log(this.employee.name);
    console.log(this.employee.id);
  }

}
