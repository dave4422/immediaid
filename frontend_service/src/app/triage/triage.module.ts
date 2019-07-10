import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriageWrapperComponent } from './triage-wrapper/triage-wrapper.component';



@NgModule({
	declarations: [TriageWrapperComponent],
	imports: [
		CommonModule
	],
	exports: [
		TriageWrapperComponent
	]
})
export class TriageModule { }
