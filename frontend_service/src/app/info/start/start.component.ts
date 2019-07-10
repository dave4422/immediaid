import { Component, OnInit } from '@angular/core';
import { DataOrganizationService } from 'src/app/waiting-time/application/diagnosis/data-organization.service';

@Component({
	selector: 'app-start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
	acceptDisclaimer = false;

	constructor(private dataService: DataOrganizationService) { }

	ngOnInit() {
		this.dataService.reset();

	}


		onVoted(agreed: boolean) {
		this.acceptDisclaimer = true;

	}

}
