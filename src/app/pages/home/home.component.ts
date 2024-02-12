import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';

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

export class HomeComponent implements AfterViewInit {

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

  constructor() { }
  
  ngAfterViewInit() {
    this.animateHelloText();
  }

  
  animateHelloText() {
    // Animate the gradient text to fade out and the default text to fade in
    gsap.to(this.helloGradient.nativeElement, { duration: 2, opacity: 1 });

    // After 2 seconds, reverse the animation
    setTimeout(() => {
      gsap.to(this.helloGradient.nativeElement, { duration: 2, opacity: 1 });
    }, 2000);
  }
}
