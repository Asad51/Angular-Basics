import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DptListComponent } from "./dpt-list/dpt-list.component";
import { DptDetailsComponent } from "./dpt-details/dpt-details.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DptOverviewComponent } from "./dpt-overview/dpt-overview.component";
import { DptContactComponent } from "./dpt-contact/dpt-contact.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { FormsComponent } from "./forms/forms.component";
import { TdfComponent } from "./tdf/tdf.component";

const routes: Routes = [
    { path: "", redirectTo: "employee-list", pathMatch: "full" },
    { path: "employee-list", component: EmployeeListComponent },
    { path: "dpt-list", component: DptListComponent },
    {
        path: "dpt-list/:id",
        component: DptDetailsComponent,
        children: [
            { path: "overview", component: DptOverviewComponent },
            { path: "contact", component: DptContactComponent }
        ]
    },
    { path: "forms", component: FormsComponent },
    { path: "forms/tdf", component: TdfComponent },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule {}
