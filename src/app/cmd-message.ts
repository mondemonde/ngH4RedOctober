import { GameCompAbout } from './sqr-status.enum';

export class CmdMessage {

    messageTo:GameCompAbout;
   
    value:any; //command etc..
    errorMessage:string;

    // constructor(values: Object = {}) {
    //     Object.assign(this, values);
    //   }

    constructor() {
        this.messageTo = GameCompAbout.ConsoleLog;
        this.value = 'new CmdMessage';        

     }
}
