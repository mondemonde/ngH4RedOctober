import { Component, OnInit, Input } from '@angular/core';
import { SqrStatus, GameCompAbout, GameCmd } from '../sqr-status.enum';
import { GameService } from '../game.service';
import { CmdMessage } from '../cmd-message';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() value: string = '0';
  @Input() id: string = null;
  sqrStatus: SqrStatus = SqrStatus.None;
  cmdMessage: CmdMessage;

  constructor(private gameSvc: GameService) {
    this.gameSvc.currentMessage.subscribe(message => this.receivedMsg(message))
  }

  errorMsg() {
    return this.cmdMessage;
  };

  receivedMsg(cmd: CmdMessage) {

    console.log('received: ' + cmd.messageTo);
    console.log('received value: ' + cmd.value);
    
    //all square
    if(cmd.messageTo==GameCompAbout.Square)
    {
     
      switch (cmd.value) {
        case GameCmd.Demo:
          this.setStatus(cmd.messageTo);
          break;
      
        default:
          break;
      }
    }


    
   //specific square...
    if (this.id == cmd.value) {
      //throw 'error';
      this.cmdMessage = cmd;
      console.log(cmd.value);
      this.setStatus(cmd.messageTo);
     
    }

    return this.cmdMessage;
  }

  ngOnInit(): void {
    this.sqrStatus = SqrStatus.None;
  }


  //logic for sqaure status
  setStatus(cmd:GameCompAbout)
  {
    if(cmd == GameCompAbout.SubPosition)
       this.sqrStatus = SqrStatus.Sub;
    else if(cmd == GameCompAbout.WarshipPosition)
    {
      this.sqrStatus =SqrStatus.Warship;
    }   
    else if(cmd == GameCompAbout.Square)
    {
      this.sqrStatus =SqrStatus.None;
    }   

  }

}
