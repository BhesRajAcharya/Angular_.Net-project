import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee:Employee={
    id:'',
    name:"",
    email:"",
    phone:0,
    salary:0,
    department:""
  }

  constructor( private employeeservice:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }
  addEmployee(){
   this.employeeservice.addEmployee(this.employee).subscribe((response)=>{
    this.router.navigate(["/employees"])
    console.log(response);
   });
  }

}
