import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap   } from '@angular/router';

@Component({
  selector: 'app-dpt-details',
  templateUrl: './dpt-details.component.html',
  styleUrls: ['./dpt-details.component.css']
})
export class DptDetailsComponent implements OnInit {
	public dptId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	//let id = parseInt(this.route.snapshot.paramMap.get('id'));
  	//this.dptId = id;
  	this.route.paramMap.subscribe((params: ParamMap) => {
  		let id = parseInt(params.get('id'));
  		this.dptId = id;
  	});
  }

  goPrevious(){
  	let previousId = this.dptId - 1;
  	this.router.navigate(['/dpt-list', previousId]);
  }

  goNext(){
  	let nextId = this.dptId  + 1;
  	this.router.navigate(['/dpt-list', nextId]);
  }

  goBack(){
  	let selectedId = this.dptId ? this.dptId : null;
  	//this.router.navigate(['/dpt-list', {id: selectedId}]); 
  	this.router.navigate(["../", {id: selectedId}], {relativeTo: this.route});
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
