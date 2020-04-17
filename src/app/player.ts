export class Player {
    Id: number;
    Score: number = 0;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }