import { Injectable } from '@angular/core';
import { DiagnosisData } from './diagnosis-data';

@Injectable({
	providedIn: 'root'
})
export class DataOrganizationService {

	private data: DiagnosisData;
	public diagnosis: string;
	public further: boolean;
	public answers_red: boolean[];
	public answers_orange: boolean[];
	public answers_yellow: boolean[];
	public answers_green: boolean[];



	public category = "5";

	constructor() { }

	getDiagnosisData(): DiagnosisData {
		if (this.data == null) {
			this.setDiagnosisData(new DiagnosisData(null, null, null, null, null));
		}

		return this.data;
	}

	setDiagnosisData(data: DiagnosisData) {
		this.data = data;
	}

	log() {
		console.log(this.data);
	}

	setErbrechen(input: boolean) {
		this.data.erbrechen = input;
	}

	getErbrechen(): boolean {
		return this.data.erbrechen;
	}

	reset() {
		this.setDiagnosisData(new DiagnosisData(null, null, null, null, null));
		this.further = null;
		this.category = "5";

	}

	genQRString(): string {
		return this.data.toString() + "diagnosis: " + this.diagnosis + " category:" + this.category + " triage: " + this.answers_red + this.answers_orange + this.answers_yellow + this.answers_green;

	}
}
