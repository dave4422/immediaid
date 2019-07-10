import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ApplicationComponent } from './application/application.component';
import { WrapperComponent } from './application/diagnosis/wrapper/wrapper.component';
import { LocationComponent } from './application/diagnosis/wrapper/location/location.component';
import { FinalComponent } from './application/diagnosis/wrapper/final/final.component';
import { GeneralComponent } from './application/diagnosis/wrapper/general/general.component';
import { FurtherComponent } from './application/diagnosis/wrapper/further/further.component';
import { Further2Component } from './application/diagnosis/wrapper/further2/further2.component';
import { Final3Component } from './application/diagnosis/wrapper/final3/final3.component';
import { Final2Component } from './application/diagnosis/wrapper/final2/final2.component';
import { Final4Component } from './application/diagnosis/wrapper/final4/final4.component';
import { ResultComponent } from './application/diagnosis/wrapper/result/result.component';
import { QrComponent } from './application/diagnosis/wrapper/qr/qr.component';







const appRoutes: Routes = [

	{
		path: 'application',
		component: ApplicationComponent,
		children: [
			{
				path: 'diagnosis',
				component: WrapperComponent,
				children: [
					{ path: 'general', component: GeneralComponent },
					{ path: 'location', component: LocationComponent },
					{ path: 'further', component: FurtherComponent },
					{ path: 'further2', component: Further2Component },
					{ path: 'final', component: FinalComponent },
					{ path: 'final2', component: Final2Component },
					{ path: 'final3', component: Final3Component },
					{ path: 'final4', component: Final4Component },
										{ path: 'result', component: ResultComponent },
										{ path: 'qr', component: QrComponent }
				]
			}
		]
	}


];


@NgModule({
	imports: [RouterModule.forChild(appRoutes)],
	exports: [RouterModule]
})




export class WaitingTimeRoutingModule { }


