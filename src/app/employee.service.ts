import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";
import { throwError } from "rxjs";

import { IEmployee } from "./employee";

@Injectable({
    providedIn: "root"
})
export class EmployeeService {
    private _url: string = "/assets/data/employees.json";

    constructor(private http: HttpClient) {}

    getEmployees(): Observable<IEmployee[]> {
        return this.http.get<IEmployee[]>(this._url).pipe(
            tap(employees => console.log("employees fetched")),
            catchError(this.errorHandler)
        );
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}
