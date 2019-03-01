import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import { NextEpisode } from '@models/nextEpisode.model';

@Directive({
  selector: '[appCountdown]'
})
export class CountdownDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { console.log('działa')}
  
  @Input() serieTime: NextEpisode;

  ngOnInit() {
    let time: string;
    const countDownDate = new Date(this.serieTime.air_date + " " + " 10:00:00").getTime();
    setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      time = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s "
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', ` ${time}`)
    }, 1000)
  }
}
