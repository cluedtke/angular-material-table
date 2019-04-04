import { Injectable } from '@angular/core';

export interface EmployeeData {
    Id: string;
    Name: string;
    Color: string;
    Hours: number;
}

const COLORS: string[] = ['gray', 'black', 'navy', 'blue', 'teal', 'green', 'purple',
    'fuchsia', 'lime', 'olive', 'aqua', 'yellow', 'orange', 'red', 'maroon'];

const NAMES: string[] = ['Robert', 'Jing Jo', 'Thomas', 'Peter', 'Sam', 'Jack',
    'Charlie', 'Maria', 'Julia', 'Albert', 'Arthur', 'James', 'Simran',
    'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

@Injectable()
export class EmployeeService {
    getEmployees(id: number): EmployeeData {
        return {
            Id: id.toString(),
            Name: NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' '
                + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.',
            Color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
            Hours: 8
        };
    }
}
