import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
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
export class ExperienceComponent implements OnInit {

 heading:string = "My Experience";
  initialStateLeft: string = "top";
  initialStateRight: string = "down";

  project:any = [
    {
      "name":"Collections Offer Management",
      "desc":"eCafe is a web based application used by HSBC Staff for communicating giving offers and maintaining logs of the collection activity. eCafe  eCafe_NG are two varients differ in technologies."
    },
    {
      "name":"Access Admin Automation",
      "desc":"It's a Web based application used to manage level of access to eCafe_NG and its functionalities."
    },
    {
      "name":"Apollo - Offer Management",
      "desc":"dsdss"
    },
    {
      "name":"Non Red Brand HSBC",
      "desc":"dsdss"
    },
    {
      "name":"Open Pigeon Cloud",
      "desc":"dsdss"
    }
  ]

  count:number=0;
  projectName:string= this.project[this.count].name;
  projectDesc:string=this.project[this.count].desc;

  constructor() {
    this.count++;
    setInterval(() => {
      this.changeProject();
      this.callFuntionAtIntervals();
  }, 5000);
   }

   callFuntionAtIntervals = () => {
    this.initialStateLeft = this.initialStateLeft == "top"? "down":"top";
    this.initialStateRight = this.initialStateRight == "down"? "top":"down";
   }

   changeProject = () => {
     this.projectName = this.project[this.count].name;
     this.projectDesc = this.project[this.count].desc;
     this.count++;
   };

  ngOnInit() {
  }

}
