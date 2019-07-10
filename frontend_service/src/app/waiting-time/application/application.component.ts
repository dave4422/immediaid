import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
	

  constructor(private router:Router) { }

  ngOnInit() {
  }

  	progress(): number {


		switch (this.router.url) {
			case "/application/diagnosis/general":
				return 10;


			case "/application/diagnosis/location":
				return 30;


			case "/application/diagnosis/further":
				return 50;

			case "/application/diagnosis/final":
				return 65;
			case "/application/diagnosis/final2":
				return 75;
			case "/application/diagnosis/final3":
				return 85;
			case "/application/diagnosis/final4":
				return 95;
			case "/application/diagnosis/result":
				return 100;

			

			default:
				return 0;

		}

	}

}
