import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { StartComponent } from './start/start.component';
import { FactsErComponent } from './facts-er/facts-er.component';
import { AlgorithmComponent } from './algorithm/algorithm.component';
import { FaqComponent } from './faq/faq.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { InfoRoutingModule } from './info-routing.module';
import { InfoContainerComponent } from './info-container/info-container.component';
import { MaterialModule } from '../material/material.module';





@NgModule({
	declarations: [DisclaimerComponent,
		StartComponent,
		FactsErComponent,
		AlgorithmComponent, FaqComponent, ImpressumComponent, InfoContainerComponent],
	imports: [
		CommonModule,
		InfoRoutingModule,
		MaterialModule
	],
	exports: [
		InfoContainerComponent
	]
})
export class InfoModule { }
