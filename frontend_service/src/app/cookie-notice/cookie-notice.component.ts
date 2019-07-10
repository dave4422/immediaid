import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cookie-notice',
  templateUrl: './cookie-notice.component.html',
  styleUrls: ['./cookie-notice.component.css']
})
export class CookieNoticeComponent {

  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
 
  vote(agreed: boolean) {
    this.voted.emit(agreed);
	this.didVote = true;
  }


}
