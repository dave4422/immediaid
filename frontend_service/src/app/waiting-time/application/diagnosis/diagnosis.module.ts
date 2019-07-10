import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { GeneralComponent } from './wrapper/general/general.component';
import { LocationComponent } from './wrapper/location/location.component';
import { FinalComponent } from './wrapper/final/final.component';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterModule } from '@angular/router';
import { FurtherComponent } from './wrapper/further/further.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';


import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Further2Component } from './wrapper/further2/further2.component';
import { Final2Component } from './wrapper/final2/final2.component';
import { Final3Component } from './wrapper/final3/final3.component';
import { Final4Component } from './wrapper/final4/final4.component';
import { ResultComponent } from './wrapper/result/result.component';
import { QrComponent } from './wrapper/qr/qr.component';

import {DialogDataExampleDialog} from './wrapper/final/final.component';
import {DialogDataExampleDialog2} from './wrapper/final2/final2.component';

@NgModule({
	declarations: [WrapperComponent, GeneralComponent, LocationComponent, FinalComponent, FurtherComponent, Further2Component, Final2Component, Final3Component, Final4Component, ResultComponent, QrComponent, DialogDataExampleDialog,DialogDataExampleDialog2],
	entryComponents: [DialogDataExampleDialog,DialogDataExampleDialog2],
	imports: [
		CommonModule, RouterModule, FormsModule, MaterialModule, ReactiveFormsModule, BrowserModule,NgxQRCodeModule,

		HttpClientModule,
	],
	exports: [
		WrapperComponent
	]
})
export class DiagnosisModule { }
