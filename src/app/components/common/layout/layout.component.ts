import { Component, OnInit } from '@angular/core';
import {trigger,transition,query,style,group,animateChild,animate} from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations:[
    trigger('routeAnimations', [
      
    ])
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
