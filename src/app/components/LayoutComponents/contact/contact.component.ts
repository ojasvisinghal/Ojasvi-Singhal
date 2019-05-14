import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  heading:string="Contact Me";

  constructor() { }

  ngOnInit() {
  }

  downloadResume(){
    //window.open("https://docs.google.com/document/d/1VA77IK2-mr91vltNCOWmuZMhF3YE3kniqIYc7MHHh6U/edit?usp=sharinghttps://drive.google.com/open?id=1x05pS0akq-uryLUZq_EXzvzSAcg3q-fs");
  window.open("https://drive.google.com/file/d/0B2v3N20FU39LQWZZQjNYNVJVdEV4cjdIQ3gxTzllQ3lib3ZF/view?usp=sharing");
  }
}
