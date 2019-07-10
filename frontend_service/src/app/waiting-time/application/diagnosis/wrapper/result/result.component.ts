import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataOrganizationService } from '../../data-organization.service';

@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

	timeHours = 5;
	timeMinutes = 40;
	currentTime = 0;

	constructor(private httpClient: HttpClient, private dataService: DataOrganizationService) {

	}

	ngOnInit() {
		this.currentTime = (new Date()).getHours()*60*60+(new Date()).getMinutes()*60;
		this.httpClient.get('http://127.0.0.1:5001/time', {
			params: {
				category: this.dataService.category,
				diagnosis: '5',
				day: '4',
				time: String(this.currentTime),
				auslastung: '50'

			},
			observe: 'response'
		})
			.toPromise()
			.then(response => {
				console.log(response);
				this.setResponse(response.body.toString());
			})
			.catch(console.log);
	}

	setResponse(response:string){
		console.log(response);
		this.timeHours = Math.floor(((Number(response) / 60) / 60));
		this.timeMinutes = Math.floor(((Number(response) - (this.timeHours*60*60)) / 60));
	}

}
