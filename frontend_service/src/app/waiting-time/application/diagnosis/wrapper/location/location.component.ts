import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { DiagnosisData } from '../../diagnosis-data';
import { DataOrganizationService } from '../../data-organization.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Location } from '../../location.enum';


@Component({
	selector: 'app-location',
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit, OnDestroy {
	data: DiagnosisData;
	img = "/assets/img/male.jpg";
	interval;

	locationString = ["Kopf",
		"Hals",
		"Schultern",
		"Arme",
		"Hände",
		"Oberkörper",
		"Bauch",
		"Oberschenkel",
		"Unterschenkel",
		"Füße",
		"Überall",
		"Psychisch",
		"Nicht Lokalisierbar"];

	getAsString(): string {
		return this.locationString[+this.data.location];
	}


	@ViewChild('abc', { static: false }) addElement: ElementRef;


	constructor(private dataService: DataOrganizationService, public elRef: ElementRef) { }


	ngOnInit() {
		this.data = this.dataService.getDiagnosisData();
		//@ViewChild('myDiv') myDiv: ElementRef;


		if (this.data.sex != null) {
			if (this.data.sex.toString() === "Sex.Male") {
				this.img = "/assets/img/male.jpg";
			} else {
				this.img = "/assets/img/female.jpg";


			}
		}

		if (this.data.location == null) {
			this.data.location = Location.Überall;
		}


	}

	checkUpdate() {

	}



	ngOnDestroy() {
		this.data.location = Location.Hände;
		this.dataService.setDiagnosisData(this.data);
	}

	onEvent(event: MouseEvent, ref: ElementRef): void {
		console.log(event.clientX);
		console.log(event.clientY);



		if (event.clientX > 1160 && event.clientX < 1200 && event.clientY > 390 && event.clientY < 450)
			this.data.location = Location.Hände;

		if (event.clientX > 1260 && event.clientX < 1290 && event.clientY > 390 && event.clientY < 450)
			this.data.location = Location.Hände;

		if (event.clientX > 1200 && event.clientX < 1240 && event.clientY > 330 && event.clientY < 430)
			this.data.location = Location.Bauch;

		if (event.clientX > 1200 && event.clientX < 1240 && event.clientY > 260 && event.clientY < 310)
			this.data.location = Location.Kopf;

		this.data.location = Location.Hände;

	}

	patient(): string {
		if (this.data.sex != null) {
			switch (this.data.sex.toString()) {
				case "Sex.Female":
					return "die Patientin";


				case "Sex.Male":
					console.log("der Patient");
					return "der Patient";



				default:
					return "der/die Patient(in)";
			}
		} return "der/die Patient(in)";
	}

	onChangeNL(value: MatSlideToggleChange) {
		if (value.checked)
			this.data.location = Location.NichtLokalisierbar;
	}

	onChangePSY(value: MatSlideToggleChange) {
		if (value.checked)
			this.data.location = Location.Psychisch;
	}

	onChangeALL(value: MatSlideToggleChange) {
		if (value.checked)
			this.data.location = Location.Überall;
	}

	checkedPSY(): boolean {
		if (this.data.location.toString() === "Location.Psychisch")
			return true
		return false;
	}
}