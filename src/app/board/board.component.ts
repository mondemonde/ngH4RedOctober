import { Component, OnInit } from '@angular/core';
import { CmdMessage } from '../cmd-message';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  xSquares:any[];
  ySquares:any[];

  cmdMessage:CmdMessage;

  constructor(private gameSvc: GameService) { }

  ngOnInit(): void {

   
    this.initGame();   
  } 


  initGame(){
   
    this.xSquares = Array(10).fill(null);
    this.ySquares = Array(10).fill(null);
    //this.winner=null;
    //this.isWarshipTurn = false;
  }


  makeSquareId(valx:any,valy:any)
  {
    let id ='sqr';
    let x= valx.toString();
    let y = valy.toString();
    let result = id.concat(x)
    result =result.concat(y);
    return result;

  }

  makeSquareValue(valx:any,valy:any)
  {
    let result:string = '';
    let x= Number(valx);
    let asciiX = x + 65;
    let y = valy.toString();       

    if(y==='0')
    {
      result = String.fromCharCode(asciiX);

    }
    else
     result = y;

    return result;

  }

  makeMove(e:any) : BoardComponent {
    //let id = e.target.id;

    console.log("square clicked");

    return this;
  }



  // makeMove(idx:number):string{
  //   //if()
  //   console.log('square clicked');

  //   //this.winner = this.calculateWinner;
  //   //return this.winner;
  //   return null;

  // }

  get calculateWinner():string{

    return null;

  }


}
