import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DptListComponent } from './dpt-list/dpt-list.component';
import { DptDetailsComponent } from './dpt-details/dpt-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DptOverviewComponent } from './dpt-overview/dpt-overview.component';
import { DptContactComponent } from './dpt-contact/dpt-contact.component';


const routes: Routes = [
	{ path: '', redirectTo: "/dpt-list", pathMatch: "full" },
	{ path: "dpt-list", component: DptListComponent },
	{ 
		path: "dpt-list/:id", 
		component: DptDetailsComponent,
		children: [
			{ path: 'overview', component: DptOverviewComponent },
			{ path: "contact", component: DptContactComponent }
		]
	},
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	providers: [],
	exports: [RouterModule]
})

export class AppRoutingModule { }