class Knight {
  constructor() {
    this.board = this.buildBoard();
    this.edgeList = [];
    this.knightMoves = [
      [1, -2],
      [2, -1],
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [-1, -2],
    ];
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

  isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  legalMoves(knightMoves = this.knightMoves) {
    const arrOfMoves = [];

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const from = x * 8 + y;
        knightMoves.forEach(([dx, dy]) => {
          const newX = x + dx;
          const newY = y + dy;

          if (this.isValid(newX, newY)) {
            const to = newX * 8 + newY;
            arrOfMoves.push([from, to]);
          }
        });
      }
    }
    return arrOfMoves;
  }
}

const knight = new Knight();
console.log(knight.legalMoves());

