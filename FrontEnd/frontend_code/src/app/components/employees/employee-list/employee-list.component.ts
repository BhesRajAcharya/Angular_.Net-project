import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Models/Employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:Employee[]=[];
  eid:string=''

  constructor(private employeeservice:EmployeeService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.employeeservice.getAllEmployees().subscribe(response=>{
      this.employees=response;
    })
  }

}
