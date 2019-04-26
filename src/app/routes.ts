import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: '', component: EmployeeComponent},
    {path: 'profile/:employeeName',  component: ProfileComponent},
    {path: 'profile', component: ProfileComponent},
];
