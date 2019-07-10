import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataOrganizationService } from '../data-organization.service';

@Component({
	selector: 'app-wrapper',
	templateUrl: './wrapper.component.html',
	styleUrls: ['./wrapper.component.css'],
	providers: []

})
export class WrapperComponent implements OnInit {


	isLinear = false;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;



	constructor(private _formBuilder: FormBuilder, private router: Router, private dataService: DataOrganizationService) { }

	ngOnInit() {
		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});
	}

	weiter(): string {

		console.log("here");

		switch (this.router.url) {
			case "/application/diagnosis/general":
				return "/application/diagnosis/location";


			case "/application/diagnosis/location":
				return "/application/diagnosis/further";


			case "/application/diagnosis/further":
				if (this.dataService.further == true) {
					console.log(this.dataService.further);
					return "/application/diagnosis/further2";
				}
				return "/application/diagnosis/final";
			case "/application/diagnosis/final":

				return "/application/diagnosis/final2"
			case "/application/diagnosis/final2":

				return "/application/diagnosis/final3"
			case "/application/diagnosis/final3":

				return "/application/diagnosis/final4"

			case "/application/diagnosis/final4":

				return "/application/diagnosis/result"

			case "/application/diagnosis/result":

				return "/application/diagnosis/qr"
			default:
				return "/start";

		}

	}

	back(): string {



		switch (this.router.url) {
			case "/application/diagnosis/general":
				return "/start";


			case "/application/diagnosis/location":
				return "/application/diagnosis/general";


			case "/application/diagnosis/further":
				return "/application/diagnosis/location";

			case "/application/diagnosis/final":
				return "/application/diagnosis/further";

			case "/application/diagnosis/final2":
				return "/application/diagnosis/final";
			case "/application/diagnosis/final3":
				return "/application/diagnosis/final2";

			case "/application/diagnosis/final4":
				return "/application/diagnosis/final3";

						case "/application/diagnosis/result":
				return "/application/diagnosis/final4";
			default:
				return "/start";

		}

	}
}
