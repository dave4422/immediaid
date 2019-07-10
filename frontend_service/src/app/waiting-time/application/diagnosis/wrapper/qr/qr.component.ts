import { Component, OnInit } from '@angular/core';
import { DataOrganizationService } from '../../data-organization.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {

	elementType : 'url' | 'canvas' | 'img' = 'url';
value : string;

  constructor(private dataService: DataOrganizationService) { }

  ngOnInit() {
	  this.value = this.dataService.genQRString();
  }

}
