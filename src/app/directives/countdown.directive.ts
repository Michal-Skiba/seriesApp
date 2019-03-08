import { Directive, ElementRef, Renderer2, OnInit, Input, OnDestroy } from '@angular/core';
import { NextEpisode } from '@models/nextEpisode.model';
import { interval } from 'rxjs';
import 'rxjs/add/operator/takeUntil'

@Directive({
  selector: '[appCountdown]'
})
export class CountdownDirective implements OnInit, OnDestroy {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() serieTime: NextEpisode;
  public timer = interval(1000);
  private subscription;
  
  getTime() {
    let time: string;
    const countDownDate = new Date(this.serieTime.air_date + " " + " 10:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    time = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s "
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', ` ${time}`)
  }

  ngOnInit() {
    this.getTime();
    this.subscription = this.timer.subscribe(() => this.getTime())
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
