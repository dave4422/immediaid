import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataOrganizationService } from '../../data-organization.service';
import { DiagnosisData } from '../../diagnosis-data';
import { FormControl } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
	selector: 'app-general',
	templateUrl: './general.component.html',
	styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit, OnDestroy {

	date: FormControl;

	data: DiagnosisData;

	constructor(private dataService: DataOrganizationService) { }

	ngOnInit() {
		this.data = this.dataService.getDiagnosisData();

		if (this.data.age == null) {
			this.date = new FormControl(new Date());
		}
		else {
			this.date = new FormControl(this.data.age);
		}


	}

	onChange(value: MatSlideToggleChange) {
		this.data.child = value.checked;
	}
	ngOnDestroy() {
		this.data.age = this.date.value;
		this.dataService.setDiagnosisData(this.data);
		this.dataService.log();
	}

}


