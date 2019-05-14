import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('rotateflip', [
      state('top', style({
        height: '0px'
      })),
      state('down', style({
        backgroundColor: 'orange',
        height: '525px'
      })),
      transition('*=>top', animate('0.2s 100ms ease-out')),
      transition('top=>*', animate('0.1s 50ms ease-in'))
    ])
  ]
})
export class AboutComponent implements OnInit {

  heading:string = "About Me";
  initialStateLeft:string = "top";
  initialStateRight:string = "down";

  constructor() {
    setInterval(() => {
      console.log("ddd");
      this.callFuntionAtIntervals();
  }, 2000);
   }

   callFuntionAtIntervals(){
    this.initialStateLeft = this.initialStateLeft == "top"? "down":"top";
    this.initialStateRight = this.initialStateRight == "down"? "top":"down";
   }

  ngOnInit() {
  }

}
