import { Component, OnInit } from '@angular/core';
import { EmployeService  } from '../../services/employe.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M:any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
  //,providers: [ EmployeService ]
})
export class EmployeesComponent implements OnInit {

  constructor(public employeService: EmployeService) { }

  ngOnInit(): void {
     this.getEmploye();
  }

  editEmployee(employee : Employee){
      this.employeService.selectedEmployee = employee;
  } 

  addEmployee(form: NgForm){
      console.log(form.value);
      this.employeService.postEmployee(form.value)
          .subscribe(res=> {
            form.reset(form);  
            M.toast({html: 'Grabado Exitosamente ..'});
            this.getEmploye();
          });
  }

  resetForm(form?: NgForm) {
      if (form){
         form.reset();
         this.employeService.selectedEmployee = new Employee();
      }
  }

  getEmploye(){
       this.employeService.getEmployee()
          .subscribe(
              res => {
                this.employeService.employees = res as Employee[];
                console.log(res);
              }
          )
  }

}
