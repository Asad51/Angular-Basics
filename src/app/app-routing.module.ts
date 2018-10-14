import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DptListComponent } from './dpt-list/dpt-list.component';
import { DptDetailsComponent } from './dpt-details/dpt-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: "/dpt-list", pathMatch: "full" },
	{ path: "dpt-list", component: DptListComponent },
	{ path: "dpt-list/:id", component: DptDetailsComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	providers: [],
	exports: [RouterModule]
})

export class AppRoutingModule { }