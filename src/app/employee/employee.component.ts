import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  employee: Employee = <Employee>{};

  formErrors = {
    'name': '',
    'id': '',
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 2 characters long',
      'maxlength': 'Name cannot be more than 25 characters long',
    },
    'id': {
      'required': 'Id number is required.',
      'pattern': 'Id number must contain onlly numbers.'
    },

  };

  constructor(
    private router: Router,
    private emplService: EmployeeService,
    private fb: FormBuilder) {
      this.createForm();
    }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      name: new FormControl(),
      id: new FormControl(),
    });
  }

  createForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      id: [0, [Validators.required, Validators.pattern]],
  });
}

  onSubmit() {
    this.employee.name = this.employeeForm.value['name'];
    this.employee.id = this.employeeForm.value['id'];
    this.emplService.saveEmployee(this.employee);
    this.router.navigate(['/profile', this.employee]);
  }

}
