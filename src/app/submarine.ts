import { H4Helper } from './h4-helper';

export class Submarine {

    position:string='sqr90' ;
    health:number =100;

   


    constructor(values: Object = {}) {
      Object.assign(this, values);
    };

    makeMove():string
    {
      //debugger;
      let moves = this.subPossibleMoves(this.position);
      let index = H4Helper.getRndInteger(0,moves.length-1);    
      this.position = moves[index];
      return this.position;

    }
  

    subPossibleMoves(sqrId: string): string[] {
    
      var splitted = sqrId.split("sqr");
      //console.log(splitted)
      let idNo:number = +splitted[1];   //convert to number
      let row = idNo % 10;    //for 95 ...=>5
      let col = (idNo - row)/10;// 95-5 => 90/10 => 9
   
      let movements = new Array();
      
      //can only do cross pattern
      //up or down
  
      let up = idNo-1;
      let down = idNo+ 1;
      let left = idNo-10;
  
      //same position
      movements.push('sqr' + idNo.toString().padStart(2, '0'));//pad with 0

      //validate     
      if(row-1>0)
       movements.push('sqr' + up.toString().padStart(2, '0'));//pad with 0
  
      if(row+1<10)
        movements.push('sqr' + down.toString().padStart(2, '0'));
  
      if(col-1>-1 && row>0)
      {
         movements.push('sqr' + left.toString().padStart(2, '0')); 
      }
  
         return movements;
    }
  
  
  //   getRndInteger(min:number, max:number) {
  //   var myMax = max + 1 
  //   return Math.floor(Math.random() * (myMax - min)) + min;
  // }

}
