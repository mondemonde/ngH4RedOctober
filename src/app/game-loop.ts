import { GameCycle, GameCompAbout, GameMode } from './sqr-status.enum';
import { GameService } from './game.service';
import { CmdMessage } from './cmd-message';
import { Submarine } from './submarine';
import { Warship } from './warship';



export class GameLoop {

   static gameSvc: GameService;    
   static mode:GameMode = GameMode.Intro;


    tmrSub = 0;
    tmrWarship = 0;
    tmrDepthCharge = 0;
    tmrTotalCnt = 0

    checkCounter() {
        this.tmrSub += 1;
        this.tmrWarship += 1;
        this.tmrDepthCharge += 1;
        this.tmrTotalCnt += 1;

        if (this.tmrDepthCharge > GameCycle.DepthCharge) {
            this.tmrDepthCharge = 0;
        }
        if (this.tmrSub > GameCycle.Sub) {

            this.tmrSub = 0;
        }

        if (this.tmrWarship > GameCycle.Warship) {
            this.tmrWarship = 0;
        }

    }

    get isSubTurn(): boolean {

        if (this.tmrSub == GameCycle.Sub)
            return true;
        else
            return false;
    }

    get isWarshipTurn(): boolean {

        if (this.tmrSub == GameCycle.Warship)
            return true;
        else
            return false;
    }

    get isDepthChargeTurn(): boolean {

        if (this.tmrSub == GameCycle.DepthCharge)
            return true;
        else
            return false;
    }


    get isGameOver(): boolean {


        return false;
    }




    subMove(){

        if (this.isSubTurn) {

            //let id = e.target;
            console.log('sub make a move..');

            //broadcast command
            let cmd = new CmdMessage();
            GameService.redOctober.makeMove();
            cmd.messageTo = GameCompAbout.SubPosition;
           
            cmd.value =GameService.redOctober.position;
            GameLoop.gameSvc.changeMessage(cmd);
        }

        //return redOctober;
    }


    warshipMove() {

        if (this.isWarshipTurn) {

            //let id = e.target;
            console.log('warship make a move..');

            //broadcast command
            let cmd = new CmdMessage();
           GameService.warship.makeMove();

            cmd.messageTo = GameCompAbout.WarshipPosition;
            
            cmd.value = GameService.warship.position;
            GameLoop.gameSvc.changeMessage(cmd);
        }

       // return GameService.warship;
    }


}
