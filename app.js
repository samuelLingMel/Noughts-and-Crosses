
var gameSquares = document.querySelectorAll('.game-square');
var winner = document.querySelector('.winner');
var turnCounter = 0;
var gameEnd = false;

var handleSquareClick = function(event) {
    if (checkGameEnded() === false) {
        
        // is the square empty?
        if (event.target.textContent === '') {
            
            // checks turn counter so on odd turns O and even X
            if (turnCounter % 2 == 0) {
                
                // on click puts down a O or X in an empty square
                event.target.textContent = 'X';
                
                // increment turn counter
                turnCounter++;
            } else {
                event.target.textContent = 'O';
                
                // increment turn counter
                turnCounter++;
            }  
            // only need to be checked after turn 5 (earliest possible someone can win)
        }
        if (turnCounter > 4) {
            // checks if there is a winner
            checkWinner();
        }
    }       
}
    
var checkGameEnded = function() {
    if (turnCounter === 9) {
            return true;
    } else if (document.querySelector('.winner').textContent !== "") {
        return true;
    } else {
        return false;
    }

}

// check winner function 
// winner is defined by three in a row
var checkWinner = function() {
    // need 8 checks of each possiblity of 3 in a row
    // check first row
    checkRow(1);
    // check second row
    checkRow(2);
    // check third row
    checkRow(3);
    // check first column
    checkColumn(1);
    // check second column
    checkColumn(2);
    // check third column
    checkColumn(3);
    // check diagonal top left to bottom right
    checkDiagonalStartTopLeft();
    // check diagonal top right to bottom left
    checkDiagonalStartTopRight();
    if (checkGameEnded() === true) {
        if (winner.textcontent === '') {
            winner.textContent = 'The game is tied';
        }
    }
}    

var checkRow = function(num) {
    if (gameSquares[3 * (num - 1)].textContent !== '') {
        checkArray = [];
        for (var index = 3 * (num - 1); index < 3 * num; index++) {
            checkArray.push(gameSquares[index].textContent);
        }
        if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
            winner.textContent = (checkArray[0] + ' is the winner!');
        }
    }
}

var checkColumn = function(num) {
    if (gameSquares[num - 1].textContent !== '') { 
        checkArray = [];
        for (var index = num - 1; index < 6 + num; index += 3) {
            checkArray.push(gameSquares[index].textContent);
        }
        if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
            winner.textContent = (checkArray[0] + ' is the winner!');
        }
    }
}

var checkDiagonalStartTopLeft = function() {
    if (gameSquares[0].textContent !== '') {
        checkArray = [];
        for (var index = 0; index < 9; index += 4) {
            checkArray.push(gameSquares[index].textContent);
        }
        if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
            winner.textContent = (checkArray[0] + ' is the winner!');
        }
    }
}

var checkDiagonalStartTopRight = function() {
    if (gameSquares[2].textContent !== '') {
        checkArray = [];
        for (var index = 2; index < 7; index += 2) {
            checkArray.push(gameSquares[index].textContent);
        }
        if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
            winner.textContent = (checkArray[0] + ' is the winner!');
        }
    }
} 

// add event listener to each square
gameSquares.forEach(function(gameSquare) {
    gameSquare.addEventListener('click', handleSquareClick);
})






