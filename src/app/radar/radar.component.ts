import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  isDetected:boolean;
  @Input()status:string = 'CLEAR';

  constructor() { }

  ngOnInit(): void {
    this.isDetected=false;
    //status='S O N A R';
  }

}
