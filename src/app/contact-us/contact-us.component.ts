import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  subject: string ="Regarding Event"
  body: string ="Hi Pooja welcome to event management"
  constructor() { }

  ngOnInit() {
  }

 

}
