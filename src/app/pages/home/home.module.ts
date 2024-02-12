import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    ResumeComponent
  ]
})
export class HomeModule { }
