import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-arrow',
  templateUrl: './scroll-arrow.component.html',
  styleUrls: ['./scroll-arrow.component.sass']
})
export class ScrollArrowComponent implements OnInit {
  @Input() target: HTMLElement;
  constructor() { }

  ngOnInit() {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
