import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/commons/service/shared.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  host: { class: 'nav-container' }
})
export class NavBarComponent implements OnInit {
  activeLink: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.currentActiveSection.subscribe(sectionId => {
      this.activeLink = sectionId;
    });
  }
}
