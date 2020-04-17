import { Player } from './player'
export class Board {
  Player: Player;
  Tiles: Object[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}