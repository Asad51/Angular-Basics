import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  public employees: IEmployee[];
  public errorMsg;
  constructor(private _employeeService: EmployeeService ) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    	.subscribe(data => this.employees = data, error => this.errorMsg = error);
  }
}
