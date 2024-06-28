class Knight {
    constructor() {
      this.board = this.buildBoard();
    }
  
    buildBoard() {
      let boardArray = [];
      for (let row = 0; row <= 7; row++) {
        for (let column = 0; column <= 7; column++) {
          boardArray.push([row, column]);
        }
      }
      return boardArray;
    }
  }
  
  let knight = new Knight();
  console.log(knight.board);
  