import { Component, OnInit, ElementRef } from '@angular/core';
import {NgxTypedJsModule, NgxTypedJsComponent} from 'ngx-typed-js';
//import { Router,NavigationEnd } from '@angular/router';
//import { filter } from 'rxjs/operators';
import { GameService } from '../game.service';

import { Router } from '@angular/router';

declare var $: any;



//declare var typer:any;
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {


 
 

  constructor(private router:Router) {
    
  }
  

  scanlines:any;
  tv:any;

  intro:string[];

 

  ngOnInit(): void {   

    this.router.routeReuseStrategy.shouldReuseRoute=()=>{
      return true;
    };
    
    this.scanlines = $('.scanlines');
    this.tv = $('.tv');  
    this.startNarration();   
    //debugger;  
    //GameService.mission = this;

    
  }

  startNarration()
  {
    this.intro = [ 'receiving transmission, please wait...^5000','Good Day, Commander!^3000',
    'Soviet submarine captain Marko Ramius is given command of Red October,^3000 \n <br>' + 
    'a new Typhoon-class nuclear missile submarine with a stealth "caterpillar drive",\n <br>' + 
    'rendering it undetectable to passive sonar.^7000 \n <br>' + 
    'Ramius leaves port to conduct exercises along with attack submarine V. K. Konovalov \n <br>' + 
    'which is depicted as a Alpha Class Submarine, commanded by his former student Captain Tupolev.^5000 \n <br>' + 
    'Once at sea, Ramius secretly kills political officer Ivan Putin ^3000 \n <br>' + 
    'and relays false orders that they are to conduct missile drills off America~s east coast.^8000 \n <br>' + 
    'At the same time, American attack submarine USS Dallas, \n <br>' +
    'tasked with identifying and shadowing Soviet subs as they leave port,^1000 \n <br>' + 
    'detects Red October, but immediately loses contact once the sub caterpillar drive is engaged.^7000',
    'The Soviet ambassador informs the U.S. government that Ramius is a renegade,^3000 \n <br>' +
    'and asks for help in sinking Red October.^3000 \n <br>' + 
    'That order is sent to the U.S. fleet, including Dallas, which has found the Soviet sub.^3000 \n <br>' + 
    'The U.S. fears Ramius plans a renegade nuclear strike.^4000',
    'Commander, stop the rogue Red October at all cost before entering ^3000 \n <br>'+ 
    'a striking distance to the United States^3000',
    'You are ordered for a search and destroy mission!^2000 \n <br>'+
    'Hunt for the Red October^3000 \n <br>' + 
    'end transmission^10000' 
  ];   

    //debugger
  }

  endNarration(){
    console.log('end narration.');
  }

  

////////////////////////////////////////////////////////--------------------




exit() {
    $('.tv').addClass('collapse');
    //term.disable();
}


// for codepen preview
// if (!term.enabled()) {
//     term.find('.cursor').addClass('blink');
// }
set_size() {
    // for window height of 170 it should be 2s
    var height = $(window).height();
    var width = $(window).width()
    var time = (height * 2) / 170;
    this.scanlines[0].style.setProperty("--time", time);
    this.tv[0].style.setProperty("--width", width);
    this.tv[0].style.setProperty("--height", height);
}
clear() {
    //term.clear();
    console.log('clear.')
}


















}
