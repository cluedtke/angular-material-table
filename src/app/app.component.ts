import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
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
  displayedColumns: string[] = ['Id', 'Name', 'Color', 'Hours'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    // create 100 employeees
    this.employees = Array.from({ length: 100 },
      (x, y) => this.employeeService.getEmployees(y + 1));

    // setup datasource
    this.datasource = new MatTableDataSource(this.employees);
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }
}
