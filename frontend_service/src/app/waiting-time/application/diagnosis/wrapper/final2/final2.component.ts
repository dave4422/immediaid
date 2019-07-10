import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DataOrganizationService } from '../../data-organization.service';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
	animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
	selector: 'app-final',
	templateUrl: './final2.component.html',
	styleUrls: ['./final2.component.css']
})
export class Final2Component implements OnInit, OnDestroy {

	diagnosis: string;

	questions_extre_red = ['Sind ihre Atemwege gefährdet?', 'Bekommen Sie ausreichend Luft?', 'Haben Sie lebensbedrohliche Blutungen?', 'Haben Sie einen Schock?']
	questions_extre_orange = ['Haben Sie ein neurologisches Defizit?', 'Leiden Sie an starkem Schmerz?', 'Haben Sie unsillbare große Blutungen?', 'Ist ihre Haut verfärbt?'];
	questions_extre_yellow = ['Haben Sie eine offene Fraktur?', 'Leiden Sie an mäßigem Schmerz?', 'Neigen Sie zu Blutungen?', 'Haben Sie eine grobe Fehlstellung?'];
	questions_extre_green = ['Haben Sie eine Fehlstellung?', 'Haben Sie Schwellungen?', 'Ist das Problem neu?', 'Haben sie leichte Schmerzen?'];

	answers_red = [false, false, false, false];
	cattemp;
	constructor(private dataService: DataOrganizationService, public dialog: MatDialog) { }

	ngOnInit() {
		this.diagnosis = this.dataService.diagnosis;

	}

	ngOnDestroy() {
		this.dataService.answers_orange = this.answers_red;

	}

	onChange(i: number) {
		if(this.answers_red[i] == true){
		this.answers_red[i] = false;

		
		this.dataService.category = this.cattemp;
	
		}
		else{this.answers_red[i] = true;

			if(this.dataService.category != null)
			this.cattemp = this.dataService.category;
			else
			this.dataService.category = "5";

			if(this.dataService.category == "5")
		this.dataService.category = "2";

		

				this.dialog.open(DialogDataExampleDialog2, {
			data: {
				animal: 'panda'
			}
		});}
	}
}

@Component({
	selector: 'dialog-data-example-dialog',
	templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog2 {
	constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}