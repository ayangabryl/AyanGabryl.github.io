import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import * as dayjs from 'dayjs';
import { SharedService } from 'src/app/commons/service/shared.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  host: { class: 'component-container full-screen center' }
})
export class ResumeComponent implements OnInit {
  @ViewChild('aboutMeSection') aboutMeSection!: ElementRef;

  age!: number;
  daysUntilBirthday!: number;
  secondsUntilBirthday!: number;
  hoursUntilBirthday!: number;
  birthday: dayjs.Dayjs = dayjs('2001-04-25'); 
  

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.calculateAgeAndBirthday();
    setInterval(() => this.calculateSecondsUntilBirthday(), 1000); // Update every second
  }

  private calculateAgeAndBirthday() {
    const now = dayjs();
    this.age = now.diff(this.birthday, 'year');
    this.daysUntilBirthday = this.birthday.add(this.age + 1, 'year').diff(now, 'day');

    this.calculateSecondsUntilBirthday();
    this.calculateHoursUntilBirthday();
  }

  private calculateSecondsUntilBirthday() {
    const now = dayjs();
    this.secondsUntilBirthday = this.birthday.add(this.age + 1, 'year').diff(now, 'second');
  }

  private calculateHoursUntilBirthday() {
    const now = dayjs();
    this.hoursUntilBirthday = this.birthday.add(this.age + 1, 'year').diff(now, 'hour');
  }
  

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if (this.isSectionInView()) {
      this.sharedService.setActiveSection('about-me');
    }
  }

  private isSectionInView(): boolean {
    const rect = this.aboutMeSection.nativeElement.getBoundingClientRect();
    const topShown = rect.top >= 0;
    const bottomShown = rect.bottom <= window.innerHeight;

    return topShown && bottomShown;
  }
}
