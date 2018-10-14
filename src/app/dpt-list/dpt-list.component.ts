import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dpt-list',
  templateUrl: './dpt-list.component.html',
  styleUrls: ['./dpt-list.component.css']
})
export class DptListComponent implements OnInit {

	departments =  [
		{ "id": 1, "name": "Mongodb" },
		{ "id": 2, "name": "NodeJs" },
		{ "id": 3, "name": "ExpresJs" },
		{ "id": 4, "name": "Angularjs" }
	];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(dpt){
  	this.router.navigate(["/dpt-list", dpt.id])
  }

}
