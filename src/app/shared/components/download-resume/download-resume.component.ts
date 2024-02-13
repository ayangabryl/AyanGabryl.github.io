import { Component } from '@angular/core';

@Component({
  selector: 'app-download-resume',
  templateUrl: './download-resume.component.html',
  styleUrls: ['./download-resume.component.scss'],
  host: { class: 'download-resume-container' }
})
export class DownloadResumeComponent {

  donwloadResume() {
    window.open('https://drive.google.com/file/d/1Avyxylv-FpExAzMnDvUCQCDc18CHcdGW/view?usp=sharing')
  }
}
