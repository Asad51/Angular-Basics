import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dpt-details',
  templateUrl: './dpt-details.component.html',
  styleUrls: ['./dpt-details.component.css']
})
export class DptDetailsComponent implements OnInit {
	public dptId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	let id = parseInt(this.route.snapshot.paramMap.get('id'));
  	this.dptId = id;
  }

}
