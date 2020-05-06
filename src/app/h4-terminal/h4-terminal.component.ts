import { Component, OnInit, ElementRef } from '@angular/core';
import { GameService } from '../game.service';
import { CmdMessage } from '../cmd-message';
import { GameCompAbout } from '../sqr-status.enum';
import { GameLoop } from '../game-loop';
import { Router } from '@angular/router';
//import {Terminal} from 'jquery.terminal.min.js'
//import * as $ from "jquery";
import { from } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

declare var $: any;

@Component({
  selector: 'app-h4-terminal',
  templateUrl: './h4-terminal.component.html',
  styleUrls: ['./h4-terminal.component.css'],
  providers: [GameService] //[BattlegroundService]// BoardService]
})

export class H4TerminalComponent implements OnInit {



  currentStrCmd: string = '';
  cmdMessage: CmdMessage;
  public router: Router;

  term: any;
  scanlines: any;
  tv: any;
  //boardService:GameService;

  constructor(elementRef: ElementRef, private gameSvc: GameService, private _router: Router
  ) {
    // get the native element and set a function on it
    (elementRef.nativeElement as any).readCmd = this.readCmd;
    this.router = _router;
    //_boardService = new BoardService(); 
  }




  clear() {
    this.term.clear();
  }

  hello() {
    return 'Hi world!';
  }




  ngOnInit(): void {

    this._router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    this.currentStrCmd = this.readCmd('Hello Mond');


    this.gameSvc.currentMessage.subscribe(message => this.receivedMsg(message))
    GameService.h4Terminal = this;

    //plugin terminal

    this.scanlines = $('.scanlines');
    this.tv = $('.tv');

    var homejs = window.eval('homejs');

    this.term = $('#term').terminal(function (command, term) {
      if (command.match(/^\s*exit\s*$/)) {
        homejs.exit1();
      } else if (command !== '') {
        try {

          window['currentCmd'] = command;
          homejs.dispatchCmd(homejs.afterDispatchCommand);


        } catch (e) {
          term.error(new String(e));

        }
      }
    }, {
      name: 'js_demo',
      // onResize: set_size,
      exit: false,
      // detect iframe codepen preview
      enabled: $('body').attr('onload') === undefined,
      onInit: function () {
        // set_size();hlep        
        this.echo('Type [[b;#fff;]NOTE:] this game is not yet playable.');
        this.echo('Type [[b;#fff;]NOTE:] this game is not yet playable.');   
        this.echo('Type [[b;#fff;]NOTE:] this game is not yet playable.');
        this.echo('Type [[b;#fff;]NOTE:] this game is not yet playable.');   
        
               
        this.echo('Type [[b;#fff;]clear] to clear console.');
        this.echo('Type [[b;#fff;]bridge] to show control center');
        this.echo('Type [[b;#fff;]mission] to see back story'); 
        this.echo('Type [[b;#fff;]demo] to simulate game.'); 
        this.echo('Type [[b;#fff;]help] to view list of commands.');
      }
      ,
      onClear: function () {
        console.log('clear console.');

      },
      prompt: 'C:\> '



    });


    // for codepen preview
    if (!this.term.enabled()) {
      this.term.find('.cursor').addClass('blink');
    }

    window['$term'] = this.term;

  }

  receivedMsg(cmd: CmdMessage) {

    if (cmd.messageTo == GameCompAbout.Terminal) {
      //throw 'error';
      this.cmdMessage = cmd;
      console.log(cmd.value);
      //this.setStatus(cmd);

    }

    return this.cmdMessage;
  }


  


  readCmd(cmd: string): string {

    console.log(`Command Reads: ${cmd}`);

    let result;

    cmd = cmd.toLowerCase();


    switch (cmd) {
      case 'hi': {
        //term.echo('Hello world!');
        //debugger;
        let term = document.getElementsByClassName('terminal-output');
        term[0].innerHTML = 'test document.getElementByClassName';
        result = 'Hello world!';
        break;
      }
      case 'right': {
        result = 'moving right!';
        break;

      }
      case 'left': {
        result = 'moving left!';
        break;
      }
      case 'start': {
        result = 'New Game created.';
        break;
      }
      case 'demo': {
        GameService.home.demoGame();
        // console.log('warship make a move..');    
        //broadcast command
        let cmdMsg = new CmdMessage();

        cmdMsg.messageTo = GameCompAbout.Square;
        cmdMsg.value = cmd;
        GameLoop.gameSvc.changeMessage(cmdMsg);


        result = 'Demo started.';
        break;
      }
      case 'intro': {
        //no break..      
      }
      case 'stop': {
        GameService.home.introGame();
        result = 'Intro Game';
        break;
      }
      case 'mission': {

        //why??? is always undefine
        console.log(this.router);

        //use instead
        GameService.home.router.navigateByUrl('/mission');
        //.then(_=>{GameService.mission.startNarration();});



        result = cmd;
        break;
      }

      case 'bridge': {

        //why??? is always undefine
        console.log(this.router);

        //use instead
        GameService.h4Terminal.router.navigateByUrl('/home');
        //.then(_=>{GameService.mission.startNarration();});



        result = cmd;
        break;
      }

      case 'game over': {
        GameService.echoGameOver();
        result = cmd;
      }


      default:
        {

          result =GameService.echoHelp();


          break;
        }
    }

    return result;


  }








  // @HostListener('window:onEnterCommand', ['$event.detail'])
  // onEnterCommand(detail) {
  //   console.log('Command Entered...', detail);
  // }




  // @HostListener('window:keyup.enter', ['$event']) enter(e: KeyboardEvent) {
  //   console.log('enter captured', e);

  // }

  // /**
  //  * Mutating event and creating an event object instead of a keyboard event
  //  * to avoid a webkit bug
  //  * @see http://jsbin.com/kosanodeve/edit?html,js,output
  //  * @see https://bugs.chromium.org/p/chromium/issues/detail?id=327853&
  //  */
  // triggerKeyboardEvent(el: any, keyString: string) {
  //   var eventObj = document.createEvent("Events") as any;

  //   if(eventObj.initEvent){
  //     eventObj.initEvent("keyup", true, true);
  //   }

  //   eventObj.shiftKey = true;
  //   eventObj.ctrlKey = false;
  //   eventObj.metaKey = false;
  //   eventObj.altKey = false;
  //   eventObj.key = keyString;

  //   el.dispatchEvent ? 
  //   el.dispatchEvent(eventObj) : 
  //   el.fireEvent("onkeyup", eventObj); 

  // } 


  //   press(keyString: string) {
  //     this.triggerKeyboardEvent(window, keyString);
  //   }

}
