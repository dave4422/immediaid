import { Component, EventEmitter, Output } from '@angular/core';


@Component({
	selector: 'app-disclaimer',
	templateUrl: './disclaimer.component.html',
	styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent {

	@Output() voted = new EventEmitter<boolean>();

	constructor() { }

  vote(agreed: boolean) {
    this.voted.emit(agreed);

  }


}
