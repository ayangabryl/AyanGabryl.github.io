import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { gsap } from 'gsap';
import { SharedService } from 'src/app/commons/service/shared.service';

interface Card {
  title: string;
  mobileTitle: string;
  iconName: string;
  route?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { class: 'component-container' }
})

export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('helloGradient') helloGradient!: ElementRef;
  
  cards: Card[] = [
    {
      title: 'Explore My Portfolio: A showcase of my skills and accomplishments.',
      mobileTitle: 'Explore My Portfolio',
      iconName: 'barbell'
    },
    {
      title: 'View My Resume: Learn more about my professional journey.',
      mobileTitle: 'View My Resume',
      iconName: 'lightbulb',
      route: 'resume'
    },
    {
      title: "Let's Connect: Reach me out for opportunities and collaborations.",
      mobileTitle: "Let's Connect",
      iconName: 'phone'
    }
  ];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // logic to determine the active section based on scroll
    const section = this.calculateActiveSection();
    this.sharedService.setActiveSection(section);
  }

  private calculateActiveSection(): string {
    let activeSection = '';
    const sections = document.querySelectorAll('section');
  
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionBottom = sectionTop + section.offsetHeight;
  
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        activeSection = section.id;
        break; // Stop the loop once the active section is found
      }
    }
  
    return activeSection;
  }
  
  
  ngAfterViewInit() {
    // this.animateHelloText();
  }

  

}
