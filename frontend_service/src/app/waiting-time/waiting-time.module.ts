import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitingTimeRoutingModule } from './waiting-time-routing.module';
import { ApplicationComponent } from './application/application.component';
import { MaterialModule } from '../material/material.module';
import { DiagnosisModule } from './application/diagnosis/diagnosis.module';





@NgModule({
  declarations: [ApplicationComponent],
  imports: [
    CommonModule,
    WaitingTimeRoutingModule, DiagnosisModule, MaterialModule
  ]
})
export class WaitingTimeModule { }
