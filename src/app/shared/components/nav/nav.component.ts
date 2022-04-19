import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  show:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.show = !this.show;
  }

}
