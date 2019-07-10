
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { MenuComponent } from './menu/menu.component';

import { FooterComponent } from './footer/footer.component';


import { InfoModule } from './info/info.module';
import { MaterialModule } from './material/material.module';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CookieNoticeComponent } from './cookie-notice/cookie-notice.component';

import { TriageModule } from './triage/triage.module';
import { WaitingTimeRoutingModule } from './waiting-time/waiting-time-routing.module';
import { WaitingTimeModule } from './waiting-time/waiting-time.module';
import { DiagnosisModule } from './waiting-time/application/diagnosis/diagnosis.module';



@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		FooterComponent,
		PageNotFoundComponent,
		CookieNoticeComponent,
	],
	imports: [
		BrowserModule,
		InfoModule,
		WaitingTimeModule,
		DiagnosisModule,
		AppRoutingModule,
		WaitingTimeRoutingModule,
		TriageModule,
		

		
		
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule,
		
		
		


	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
