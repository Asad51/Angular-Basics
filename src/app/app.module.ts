import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmployeeService } from './employee.service';
import { DptListComponent } from './dpt-list/dpt-list.component';
import { DptDetailsComponent } from './dpt-details/dpt-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { DptOverviewComponent } from './dpt-overview/dpt-overview.component';
import { DptContactComponent } from './dpt-contact/dpt-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmpDetailsComponent,
    DptListComponent,
    DptDetailsComponent,
    PageNotFoundComponent,
    DptOverviewComponent,
    DptContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

