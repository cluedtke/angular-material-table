import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { EmployeeService, EmployeeData } from './employees/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material-table';
  datasource: MatTableDataSource<EmployeeData>;
  employees: EmployeeData[] = [];

  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    // create 100 employeees
    this.employees = Array.from({ length: 100 },
      (x, y) => this.employeeService.getEmployees(y + 1));

    // assign data to data source
    this.datasource = new MatTableDataSource(this.employees);
  }
}
