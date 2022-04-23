import { Component, OnInit } from '@angular/core';
import { KursetService } from './services/kurset.service';

@Component({
  selector: 'app-kurset',
  templateUrl: './kurset.component.html',
  styleUrls: ['./kurset.component.scss']
})
export class KursetComponent implements OnInit {

  public kursetList:any = [];
  constructor(private kursetService : KursetService) { }

  ngOnInit(): void {
    this.kursetService.getAllKurst().subscribe(data => {
      this.kursetList = data;
      console.log(data);
    })

  }

}
