class Knight {
  constructor() {
    this.knightMoves = [
      [1, -2], [2, -1], [2, 1], [1, 2],
      [-1, 2], [-2, 1], [-2, -1], [-1, -2],
    ];
  }

  isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  getPosition(square) {
    return [Math.floor(square / 8), square % 8];
  }

  getSquare(x, y) {
    return x * 8 + y;
  }
  
  getCoordinate(sqrIndex) {
    if(sqrIndex == 0) return [0, 0];
    return [Math.floor(sqrIndex / 8), sqrIndex % 8];
}
  
  getIndex(coordinateSqr) {
  return Math.floor(coordinateSqr[0] * 8) + coordinateSqr[1];
}

  knightShortPath(startingSquare, targetSquare) {
    if (startingSquare === targetSquare) return [startingSquare]
    
    startingSquare = this.getIndex(startingSquare);
    targetSquare = this.getIndex(targetSquare);
    
    const queue = [[startingSquare]];
    const visited = Array(64).fill(false);
    visited[startingSquare] = true;

    while (queue.length > 0) {
      const path = queue.shift();
      const currentSquare = path[path.length - 1];
      const [x, y] = this.getPosition(currentSquare);

      for (const [dx, dy] of this.knightMoves) {
        const newX = x + dx;
        const newY = y + dy;
        const newSquare = this.getSquare(newX, newY);

        if (this.isValid(newX, newY) && !visited[newSquare]) {
          if (newSquare === targetSquare) {
            let pathCoordinates = []
            path.forEach((num) => {
              pathCoordinates.push(this.getCoordinate(num));
            });
            
            pathCoordinates.push(this.getCoordinate(targetSquare))
            
            return [...pathCoordinates];
          }

          visited[newSquare] = true;
          queue.push([...path, newSquare]);
        }
      }
    }

    return null; 
  }
}

// Example usage
const knight = new Knight();
const startingSquare = [0,0]; 
const targetSquare = [3,3]; 
const path = knight.knightShortPath(startingSquare, targetSquare);
console.log(path);