import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './start/start.component';
import { FactsErComponent } from './facts-er/facts-er.component';
import { AlgorithmComponent } from './algorithm/algorithm.component';
import { FaqComponent } from './faq/faq.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { InfoContainerComponent } from './info-container/info-container.component';


const appRoutes: Routes = [
	{ path: 'start', component: StartComponent },
	{
    path: 'info',
    component: InfoContainerComponent,
    children: [
      
         { path: 'facts-er', component: FactsErComponent },
	{ path: 'algorithm', component: AlgorithmComponent },
	{ path: 'faq', component: FaqComponent },
	{ path: 'impressum', component: ImpressumComponent }
    ]
  }
	
];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class InfoRoutingModule { }
