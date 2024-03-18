import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private empservice:EmployeeService,private router:Router) { }

  employeedetails:Employee={
    id:'',
    name:"",
    email:"",
    phone:0,
    salary:0,
    department:""
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
    const id=  params.get("id");
    if(id){
      this.empservice.getemployeeById(id).subscribe((emp)=>{
         this.employeedetails=emp;
      })
    }
    })
  }

  updateemployee(){
    this.empservice.updateEmployee(this.employeedetails.id,this.employeedetails).subscribe((response)=>{
     this.router.navigate(['employees'])
    });
  }

  deleteemployee(){
    this.empservice.deleteEmployee(this.employeedetails.id).subscribe((res)=>{
      this.router.navigate(['employees']);
    })
  }

 
}
