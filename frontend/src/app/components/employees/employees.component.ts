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

  estadoEditable: string;
  constructor(public employeService: EmployeService) { 
    this.estadoEditable="Save";

  }

  ngOnInit(): void {
     this.getEmploye();
  }

  deleteEmployee(employe : Employee){
    this.employeService.selectedEmployee = employe;
    console.log(`ELiminar employee ${employe._id}`);
    this.employeService.deleteEmployee(employe._id)
        .subscribe(res => {
            M.toast({html: 'Elemento Eliminado'});
            this.getEmploye();
            this.resetForm();
          }
        );
    
  }

  editEmployee(employee : Employee){
      this.employeService.selectedEmployee = employee;
      this.estadoEditable="Update";

  } 

  addEmployee(form: NgForm){
      if (this.estadoEditable=="Save"){
        console.log(form.value);
        this.employeService.postEmployee(form.value)
            .subscribe(res=> {
              form.reset(form);  
              M.toast({html: 'Grabado Exitosamente ..'});
              this.getEmploye();
            });
      }

      if (this.estadoEditable=="Update"){
          console.log('Acer Update');
          console.log(form.value);
          this.employeService.putEmployee(form.value)
            .subscribe(res=> {
                form.reset(form);
                M.toast('Update Exitoso ...');
                this.getEmploye();
            }

            );
      }
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
