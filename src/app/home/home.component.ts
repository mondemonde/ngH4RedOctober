import { Component, OnInit } from '@angular/core';
import { Submarine } from '../submarine';
import { Warship } from '../warship';
import { RadarComponent } from '../radar/radar.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { GameService } from '../game.service';
import { CmdMessage } from '../cmd-message';
import { GameCompAbout, GameMode } from '../sqr-status.enum';
import { GameLoop } from '../game-loop';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GameService] //[BattlegroundService]// BoardService]
})
export class HomeComponent implements OnInit {
  tmrGame: GameLoop;
  _router:Router;

  constructor(private gameSvc: GameService,public router:Router) {

     this._router= router;
     
   }

  ngOnInit(): void {
    this.introGame();
  }


  introGame() {
    this.gameSvc.createBoard();
    //this.redOctober = GameService.redOctober;
    //this.warship = GameService.warship;
    this.tmrGame = new GameLoop();
    GameLoop.mode = GameMode.Intro;
    GameLoop.gameSvc = this.gameSvc;
    GameService.home = this;
  }


  newGame() {
    this.gameSvc.createBoard();
    //this.redOctober = GameService.redOctober;
    //this.warship = GameService.warship;
    this.tmrGame = new GameLoop();
    GameLoop.mode = GameMode.Play;
    GameLoop.gameSvc = this.gameSvc;
    GameService.home = this;
  }

  demoGame() {
    this.gameSvc.createBoard();
    //this.redOctober = GameService.redOctober;
    //this.warship = GameService.warship;
    this.tmrGame = new GameLoop();
    GameLoop.mode = GameMode.Demo;
    GameLoop.gameSvc = this.gameSvc;
    GameService.home = this;
  }

  gameLoop() {

//debugger;
    switch (GameLoop.mode) {
      case GameMode.Intro:

        break;

      case GameMode.Demo:
        {
         
          this.tmrGame.checkCounter();
          //this.warship = 
          this.tmrGame.warshipMove();
          //this.redOctober =
          this.tmrGame.subMove();
          this.isGameOver();

          break;
        }

      default:
        break;
    }




  }



  isGameOver():boolean
  {
    let result = false;
    
    //sub cross columna
    let subPos = GameService.redOctober.position;
    console.log(' GameService.redOctober.position = ' + subPos);
    
      var subSplitted = subPos.split("sqr");      
      let subIdNo:number = + subSplitted[1];   //convert to number
      let subRow = subIdNo % 10;    //for 95 ...=>5
      let subCol = (subIdNo - subRow)/10;// 95-5 => 90/10 => 9

      if(subCol<= 0)
         result = true;     

      console.log('isGameOver =' + result.toString());

      if(result==true)
      {
        GameService.echoGameOver();      

      }
      
      return result;
  }

}
