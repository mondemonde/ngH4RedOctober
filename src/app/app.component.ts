
// import needed classes and services
import { Component, ViewContainerRef, OnInit } from '@angular/core';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
//import { BoardService } from './board.service'
import { Board } from './board'
import { ToastrService } from 'ngx-toastr';


import { RadarComponent } from './radar/radar.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { GameService } from './game.service';
import { CmdMessage } from './cmd-message';
import { GameCompAbout, GameMode } from './sqr-status.enum';
import { GameLoop } from './game-loop';
import { isNullOrUndefined } from 'util';
//import { BoardService } from './board.service';


// set game constants
//const NUM_PLAYERS: number = 2;
//const BOARD_SIZE: number = 6;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './radar/radar.component.css', './styles/base.css', './styles/basic-grid.css']
 
})

export class AppComponent implements OnInit { 

  ngOnInit(): void {     

  }

 

  //radar:RadarComponent;

  canPlay: boolean = true;
  player: number = 1;
  //players: number = 0;
  //gameId: string;
  gameUrl: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');

  constructor(
    private toastr: ToastrService,//ToastsManager,
    private _vcr: ViewContainerRef  
  ) {




  }




  // event handler for click event on
  // each tile - fires torpedo at selected tile
  fireTorpedo(e: any): AppComponent {
    let id = e.target.id,
      boardId = id.substring(1, 2),
      row = id.substring(2, 3), col = id.substring(3, 4);
    return this;
  }


  checkValidHit(boardId: number, tile: any): boolean {
    if (boardId == this.player) {
      this.toastr.error("Don't commit suicide.", "You can't hit your own board.")
      return false;
    }
    if (this.winner) {
      this.toastr.error("Game is over");
      return false;
    }
    if (!this.canPlay) {
      this.toastr.error("A bit too eager.", "It's not your turn to play.");
      return false;
    }
    if (tile.value == "X") {
      this.toastr.error("Don't waste your torpedos.", "You already shot here.");
      return false;
    }
    return true;
  }

  // createBoards() : AppComponent {
  //   for (let i = 0; i < NUM_PLAYERS; i++)
  //     this.boardService.CreateBoard(BOARD_SIZE);
  //   return this;
  // }

  // winner property to determine if a user has won the game.
  // once a user gets a score higher than the size of the game
  // board, he has won.
  get winner(): boolean {
    return false;//this.board.find(board => board.player.score >= BOARD_SIZE);
  }





}