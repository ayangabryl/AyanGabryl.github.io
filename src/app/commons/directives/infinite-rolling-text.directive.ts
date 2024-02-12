import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { gsap } from "gsap";

// https://greensock.com/forums/topic/24852-having-some-trouble-with-rotating-text/

@Directive({
  selector: "[infiniteRollingText]",
})
export class InfiniteRollingTextDirective implements OnInit {
  private modes = {
    UP: "up",
    DOWN: "down",
  };
  @Input() mode: typeof this.modes.UP | typeof this.modes.DOWN = this.modes.UP;
  @Input() duration: number = 1;
  /* delay */
  @Input() hold: number = 1;
  @Input() delay: number = 3;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const el = this.el.nativeElement.children;
    let elements = [...el];
    /* handle first element */
    gsap.to(el[0], {
      delay: this.delay,
      yPercent: this.modes.UP === this.mode ? -100 : 100,
      opacity: 0,
      ease: "power2.out",
      duration: this.duration,
    });

    elements.shift();
    elements.forEach((el: HTMLSpanElement | any, i: number) => {
      let tl = gsap.timeline({
        delay: this.duration * i + this.hold * i + this.delay,
        repeat: -1,
        repeatDelay:
          (elements.length - 1) * (this.duration + this.hold) - this.duration,
        defaults: {
          ease: "power2.out",
          duration: this.duration,
        },
      });
      tl.from(el, {
        yPercent: this.modes.UP === this.mode ? 100 : -100,
        opacity: 0,
      });
      tl.to(
        el,
        {
          yPercent: this.modes.UP === this.mode ? -100 : 100,
          opacity: 0,
        },
        "+=" + this.hold
      );
    });
  }
}
