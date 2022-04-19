import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // my phone number.
  phoneNumber:number = 38344395902;

  // my email address.
  email:string = 'qendrim.s.imeri@gmail.com';
  
  constructor() { }

  ngOnInit(): void {
  }

}
