import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	accept_cookie;
	title = 'improvemed';

	ngOnInit(): void {

		if (localStorage.getItem('accept_cookie') == 'true') {
			this.accept_cookie = true;
		} else {
			this.accept_cookie = false;
		}
	}



	onVoted(agreed: boolean) {
		this.accept_cookie = agreed;

		localStorage.setItem('accept_cookie', 'true');

	}
}
