import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/employees/update-employee/update-employee.component';

const routes: Routes = [
  {path:'',component:EmployeeListComponent},
  {path:"employees", component:EmployeeListComponent},
  {path:"employees/add",component:AddEmployeeComponent},
  {path:"employees/edit/:id",component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
