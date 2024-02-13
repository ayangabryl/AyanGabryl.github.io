import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DownloadResumeComponent } from './components/download-resume/download-resume.component';



@NgModule({
  declarations: [
    NavBarComponent,
    DownloadResumeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    DownloadResumeComponent
  ]
})
export class SharedModule { }
