import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('slideLeft', [
      state('left', style({
        backgroundColor: 'green',
        paddingLeft: '10px',
        width: '10px',
        height: '10px'
      })),
      state('right', style({
        backgroundColor: 'pink',
        width: '200px',
        paddingLeft: '88px',
        height: '200px'
      })),
      transition('left<=>right', animate('0.2s 100ms ease-out'))
    ])
  ]
})
export class AboutComponent implements OnInit {

  aco = 'left';

  constructor() { }

  ngOnInit() {
    this.aco = 'right';
  }

}
