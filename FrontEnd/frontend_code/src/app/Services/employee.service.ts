import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employee')
  }

  addEmployee(emp:Employee):Observable<Employee>{
    emp.id="00000000-0000-0000-0000-000000000000"
     return this.http.post<Employee>(this.baseApiUrl + '/api/Employee',emp)
  }

  getemployeeById(id:any):Observable<Employee>{
    return  this.http.get<Employee>(this.baseApiUrl + '/api/Employee/'+id);
  }

  updateEmployee(id:string ,emp:Employee):Observable<Employee>{
    return  this.http.put<Employee>(this.baseApiUrl + '/api/Employee/'+id,emp)
  }

  deleteEmployee(id:string):Observable<Employee>{
     return this.http.delete<Employee>(this.baseApiUrl + '/api/Employee/'+id)
  }
}
