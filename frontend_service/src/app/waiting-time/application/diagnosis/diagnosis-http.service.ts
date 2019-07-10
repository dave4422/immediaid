import { Injectable } from '@angular/core';

import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
	providedIn: 'root'
})
export class DiagnosisHTTPService {

	constructor(private http: HttpClient) { }

}
