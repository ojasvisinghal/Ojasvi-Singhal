import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('smash', [
      state('simple', style({
        height: '0px'
      })),
      state('rotateIt', style({
        backgroundColor: '#ffa50069',
        color: 'black',
        fontSize: 'x-large'
      })),
      transition('*=>simple', animate('0.2s 100ms ease-out')),
      transition('simple=>*', animate('0.1s 50ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  plain1:string = "simple";
  plain2:string = "simple";
  plain3:string = "simple";
  plain4:string = "simple";
  plain5:string = "simple";

  tmp:string = "plain";

  constructor() { }

  ngOnInit() {
  }


  about(){
    this.plain1 = this.plain1 == "simple" ? "rotateIt" : "simple";
    this.plain2 = "simple";
    this.plain3 = "simple";
    this.plain4 = "simple";
    this.plain5 = "simple";
    console.log("about called");
  }

  experience(){
    this.plain2 = this.plain2 == "simple" ? "rotateIt" : "simple";
    this.plain1 = "simple";
    this.plain3 = "simple";
    this.plain4 = "simple";
    this.plain5 = "simple";
    console.log("experience called");
  }

  education(){
    this.plain3 = this.plain3 == "simple" ? "rotateIt" : "simple";
    this.plain1 = "simple";
    this.plain2 = "simple";
    this.plain4 = "simple";
    this.plain5 = "simple";
    console.log("education called");
  }

  skills(){
    this.plain4 = this.plain4 == "simple" ? "rotateIt" : "simple";
    this.plain1 = "simple";
    this.plain2 = "simple";
    this.plain3 = "simple";
    this.plain5 = "simple";
    console.log("skills called");
  }

  contact(){
    this.plain5 = this.plain5 == "simple" ? "rotateIt" : "simple";
    this.plain1 = "simple";
    this.plain2 = "simple";
    this.plain3 = "simple";
    this.plain4 = "simple";
    console.log("contact called");
  }

}
