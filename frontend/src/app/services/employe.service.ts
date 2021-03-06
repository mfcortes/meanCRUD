import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  selectedEmployee: Employee;
  employees: Employee[];

  readonly URL_API = 'http://localhost:3000/api/employes/';
  constructor(private http: HttpClient) { 
    this.selectedEmployee = new Employee();
  }

  getEmployee() {
     return this.http.get(this.URL_API);
  }

  postEmployee(employee: Employee) {
    console.log(`Haciendo un PUT sobre ${this.URL_API}`);
    return this.http.post(this.URL_API, employee);
  }

  putEmployee(employee: Employee){
    console.log('SE TRATA DE HACER PUT');
    //console.log(`${this.URL_API} + ${employee._id}, ${employee.name}`);
    return this.http.put(this.URL_API + `${employee._id}`, employee );
  }

  deleteEmployee(_id: string){
     return this.http.delete(this.URL_API + `${_id}`);
  }

}
