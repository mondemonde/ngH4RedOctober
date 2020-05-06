import { Injectable } from '@angular/core';
import { SquareComponent } from './square/square.component';
import { BehaviorSubject } from 'rxjs';
import { CmdMessage } from './cmd-message';
import { Submarine } from './submarine';
import { Warship } from './warship';
import { H4Helper } from './h4-helper';
import { GameLoop } from './game-loop';
import { GameMode, GameCompAbout } from './sqr-status.enum';
import { AppComponent } from './app.component';
import { H4TerminalComponent } from './h4-terminal/h4-terminal.component';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';
//import { writeHeapSnapshot } from 'v8';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  static redOctober: Submarine;
  static warship: Warship;

  static  home:HomeComponent;
  static  mission:MissionComponent;
  static  h4Terminal:H4TerminalComponent


  
  private messageSource = new BehaviorSubject<CmdMessage>(new CmdMessage()) //new BehaviorSubject('default message');
  //public obsevable 
  currentMessage = this.messageSource.asObservable();
  cmdMessage:CmdMessage;

  changeMessage(message: CmdMessage) {
    this.messageSource.next(message)
  }

  createBoard():GameService
  {

    //clears the board


    GameService.redOctober = new  Submarine();

    let rnd = H4Helper.getRndInteger(90,99);   
    GameService.redOctober = new  Submarine();
    GameService.redOctober.position = 'sqr' + rnd;


    GameService.warship = new Warship();
    GameService.warship.position = 'sqr00'
    return this;
  }


  makeCmdMessage(values: Object = {}):CmdMessage
  {
    this.cmdMessage = new CmdMessage();  
    Object.assign(this.cmdMessage, values);

    return this.cmdMessage;

  }


  static echo(msg:string){

    let term = document.getElementsByClassName('terminal-output');
    term[0].innerHTML =  msg; 
    

  }

  static echoGameOver(){

    let term = document.getElementsByClassName('terminal-output');
    //GameService.

     
    let msg =`<pre class='blink_terminal' style='background-color: black; color = red'>
    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▄░█░▄▄▀█░▄▀▄░█░▄▄████░▄▄▄░█▀███▀█░▄▄█░▄▄▀
██░█▀▀█░▀▀░█░█▄█░█░▄▄████░███░██░▀░██░▄▄█░▀▀▄
██░▀▀▄█▄██▄█▄███▄█▄▄▄████░▀▀▀░███▄███▄▄▄█▄█▄▄
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
</pre><div style ='color:red'>
Mission Failed: USA will retaliate in 10 mins.<br>
Retreat to Arctic North Command.<br>
<span class='blink_terminal'> <strong>WARNING: </strong>WORLD WAR 3 has begun.</span></div> `;



    term[0].innerHTML =  msg;
    GameService.home.introGame();  
    

  }

  static echoHelp()
  {
    let term = document.getElementsByClassName('terminal-output');    
  let msg = 
  '<div class="alert alert-dark"> <b>bridge</b> -go to home page \n <br><br>' + 
  '<b>demo</b> -simulate game \n <br><br>' + 
  '<b>down</b> -move warship down \n <br><br>' + 
  '<b>help</b> -list of commands \n <br><br>' + 
  '<b>left</b> -move warship left \n <br><br>' + 
  '<b>mission</b> -go to mission page \n <br><br>' +   
  '<b>right</b> -move warship right \n <br><br>'  +  
  '<b>up</b> -move warship up \n <br><br>'  +
  '<b>game</b> over -test game over \n <br><br>'  +
  '</div>';  

    if(term.length>0) 
    {
     term[0].innerHTML +=  msg;
    
    }
  }

  constructor() {   

   }

  
game
  




}
