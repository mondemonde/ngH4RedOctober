import { H4Helper } from './h4-helper';

export class Warship {

    position:string='sqr00' ;
    health:number =100;
    depthCharges: number = 0;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }

    makeMove():string
    {
      //debugger;
      let moves = this.possibleMoves(this.position);
      let index = H4Helper.getRndInteger(0,moves.length-1);    
      this.position = moves[index];
      return this.position;

    }
  

    possibleMoves(sqrId: string): string[] {
    
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
      let right = idNo + 10;

      //diagonal
      let leftTop = left -1;
      let leftDown = left + 1;

      let rightTop = right -1;
      let rightDown = right + 1;

     //same position
      movements.push('sqr' + idNo.toString().padStart(2, '0'));//pad with 0
      //validate     
      if(up>-1 && up<100)
       movements.push('sqr' + up.toString().padStart(2, '0'));//pad with 0
  
      if(down>-1 && down<100)
        movements.push('sqr' + down.toString().padStart(2, '0'));
  
      if(left>-1 && left<100)
      {
         movements.push('sqr' + left.toString().padStart(2, '0'));  
      }

      if(leftTop>-1 && leftTop<100)
      {
         movements.push('sqr' + leftTop.toString().padStart(2, '0'));  
      }
      if(leftDown>-1 && leftDown<100)
      {
         movements.push('sqr' + leftDown.toString().padStart(2, '0'));  
      }


      if(rightTop>-1 && rightTop<100)
      {
         movements.push('sqr' + rightTop.toString().padStart(2, '0'));  
      }
      if(rightDown>-1 && rightDown<100)
      {
         movements.push('sqr' + rightDown.toString().padStart(2, '0'));  
      }

     if(right>-1 && right<100)
      {
         movements.push('sqr' + right.toString().padStart(2, '0')); 
      }

        let filtered = new Array();
        movements.forEach(element => {

          if(element.charAt(element.length-1)!='9')
          {
            filtered.push(element);          
          
          }           

          
        });


         return filtered;
    }

}
