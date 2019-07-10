import { Component, OnInit } from '@angular/core';
import {
 Router}     from '@angular/router';

@Component({
  selector: 'app-further2',
  templateUrl: './further2.component.html',
  styleUrls: ['./further2.component.css']
})
export class Further2Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
	  this.router.navigate(['/application/diagnosis/further']);

  }

}
