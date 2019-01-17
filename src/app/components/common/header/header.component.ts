import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  about(){
    console.log("about called");
  }

  experience(){
    console.log("experience called");
  }

  education(){
    console.log("education called");
  }

  skills(){
    console.log("skills called");
  }

  contact(){
    console.log("contact called");
  }

}
