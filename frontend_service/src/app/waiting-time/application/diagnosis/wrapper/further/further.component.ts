import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataOrganizationService } from '../../data-organization.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
	selector: 'app-further',
	templateUrl: './further.component.html',
	styleUrls: ['./further.component.css']
})
export class FurtherComponent implements OnInit, OnDestroy {

	enough: boolean;
	fragen = [];
	diagnosis: string;
	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	durchfall;

	constructor(private dataService: DataOrganizationService) { }

	ngOnInit() {
		if(this.dataService.getErbrechen() != null)
		this.durchfall = this.dataService.getErbrechen();
		else
		this.durchfall = false;

		console.log(this.dataService.getDiagnosisData().location.toString());
		if (this.dataService.getDiagnosisData().location.toString() == "4") {
			this.enough = true;
			this.diagnosis = "Extremitätenprobleme";
			this.dataService.further = false;
		} else if (this.dataService.getDiagnosisData().location.toString() == "6" && this.dataService.getDiagnosisData().erbrechen == null) {
			this.enough = false;
			this.fragen.push("Leiden Sie an Durchfall oder Erbrechen?");
			console.log(this.fragen);
			this.dataService.further = true;
		} else if (this.dataService.getDiagnosisData().location.toString() == "6" && this.dataService.getDiagnosisData().erbrechen == true) {
			this.enough = true;
			this.diagnosis = "Durchfall Erbrechen";
			this.dataService.further = false;
		} else if (this.dataService.getDiagnosisData().location.toString() == "6" && this.dataService.getDiagnosisData().erbrechen == false && this.dataService.getDiagnosisData().child == true) {
			this.enough = true;
			this.diagnosis = "Abdominelle Schmerzen bei Kindern";
			this.dataService.further = false;
		} else if (this.dataService.getDiagnosisData().location.toString() == "6" && this.dataService.getDiagnosisData().erbrechen == false) {
			this.enough = true;
			this.diagnosis = "Abdominelle Schmerzen bei Erwachsenen";
			this.dataService.further = false;
		}

	}

	ngOnDestroy() {

		this.dataService.setErbrechen(this.durchfall);
		this.dataService.diagnosis = this.diagnosis;


	}

	onChange(value: MatSlideToggleChange) {
		if (value.checked)
			this.durchfall = (true);
		else
			this.durchfall = (false);
	}

}


