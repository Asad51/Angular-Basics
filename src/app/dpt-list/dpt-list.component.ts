import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dpt-list',
  templateUrl: './dpt-list.component.html',
  styleUrls: ['./dpt-list.component.css']
})
export class DptListComponent implements OnInit {

  public selectedId;
	departments =  [
		{ "id": 1, "name": "Mongodb" },
		{ "id": 2, "name": "NodeJs" },
		{ "id": 3, "name": "ExpresJs" },
		{ "id": 4, "name": "Angularjs" }
	];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(dpt){
  	//this.router.navigate(["/dpt-list", dpt.id])
    this.router.navigate([dpt.id], {relativeTo: this.route});
  }

  isSelected(dpt){
    return dpt.id === this.selectedId;
  }
}
