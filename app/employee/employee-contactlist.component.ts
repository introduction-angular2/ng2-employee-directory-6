import {Component} from "angular2/core";
import {Employee} from './employee.interface';
import {EmployeeContactService} from './employee-contact.service';

@Component({
  templateUrl :'/app/employee/employee-contactlist.html',
  providers: [EmployeeContactService]      
})

export class EmployeeContactListComponent {

  private employeeContacts : Employee[]; 

  constructor(private _employeeContactService: EmployeeContactService) { }

  ngOnInit() {
    this.getEmployeeContacts();
  }

  private getEmployeeContacts() {
    this._employeeContactService.getEmployeeContacts()
      .then(
      data => this.handleSuccess(data),
      error => this.handleError(error));
  }

  private handleSuccess(data) {
    console.log("Response data == >", data);
    this.employeeContacts = data;
  }

  private handleError(error) {
    console.error("Error while invoking the service == >", error);
  }

}

