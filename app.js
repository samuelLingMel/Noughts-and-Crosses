
var gameSquares = document.querySelectorAll('.game-square');
var winner = document.querySelector('.winner');
var turnCounter = 0;
var gameEnd = false;
var sizeInput = 3;
var xScore = 0;
var oScore = 0;
var resultsGrid = [];

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
    if (sizeInput === 3) {
        if (turnCounter === sizeInput ** 2) {
                return true;
        } else if (document.querySelector('.winner').textContent !== "") {
            return true;
        } else {
            return false;
        }
    }   
}

var checkWinner = function() {
    if (sizeInput === 3) {
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
    } else {
        createGrid(sizeInput);
        checkRow();
        checkColumn();
        checkDiagonalStartTopLeft();
        checkDiagonalStartTopRight();
    }
}    

var check3Same = function(arr) {
    if (arr.length > 2) {
        for (var index = 0; index < arr.length - 2; index++) {
            if (arr[index] === arr[index + 1] && arr[index + 1] === arr[index + 2]) {
                if (arr[index] === 'X') {
                    xScore++;
                } else if (arr[index] === 'O') {
                    oScore++;
                }
            }
        } 
    } 
}

var checkRow = function(num) {
    if (sizeInput === 3) {
        if (gameSquares[3 * (num - 1)].textContent !== '') {
            checkArray = [];
            for (var index = 3 * (num - 1); index < 3 * num; index++) {
                checkArray.push(gameSquares[index].textContent);
            }
            if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
                winner.textContent = (checkArray[0] + ' is the winner!');
            }
        }
    } else {
        for (var index1 = 0; index1 < sizeInput; index1++) {
            check3Same(resultsGrid[index1]);
        }
    }
}

var checkColumn = function(num) {
    if (sizeInput === 3) {
        if (gameSquares[num - 1].textContent !== '') { 
            checkArray = [];
            for (var index = num - 1; index < 6 + num; index += 3) {
                checkArray.push(gameSquares[index].textContent);
            }
            if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
                winner.textContent = (checkArray[0] + ' is the winner!');
            }
        }
    } else {
        for (var index1 = 0; index1 < sizeInput; index1++) {
            var resultsArray = [];
            for (var index2 = 0; index2 < sizeInput; index2++) {
                resultsArray.push(resultsGrid[index2][index1]);
                console.log(resultsArray)
            }
            check3Same(resultsArray);
        }
    }
}

var checkDiagonalStartTopLeft = function() {
    if (sizeInput === 3) { 
        if (gameSquares[0].textContent !== '') {
            checkArray = [];
            for (var index = 0; index < 9; index += 4) {
                checkArray.push(gameSquares[index].textContent);
            }
            if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
                winner.textContent = (checkArray[0] + ' is the winner!');
            }
        }
    } else {
        for (var index1 = sizeInput - 1; index1 >= 0; index1--) {
            var resultsArray = [];
            for (var index2 = 0; index2 < sizeInput; index2++) {
                if (resultsGrid[index1+index2] !== undefined) { 
                    if (resultsGrid[index1+index2][index2] !== undefined) {
                    resultsArray.push(resultsGrid[index1+index2][index2]);
                    }
                }
            }
            check3Same(resultsArray);
        } for (var index1 = 1; index1 < sizeInput; index1++) {
            var resultsArray = [];
            for (var index2 = 0; index2 < sizeInput; index2++) {
                if (resultsGrid[index2] !== undefined) { 
                    if (resultsGrid[index2][index2 + index1] !== undefined) {
                    resultsArray.push(resultsGrid[index2][index2 + index1]);
                    }
                }
            }
            check3Same(resultsArray);
        }
    }
}

var checkDiagonalStartTopRight = function() {
    if (sizeInput === 3) {
        if (gameSquares[2].textContent !== '') {
            checkArray = [];
            for (var index = 2; index < 7; index += 2) {
                checkArray.push(gameSquares[index].textContent);
            }
            if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
                winner.textContent = (checkArray[0] + ' is the winner!');
            }
        }
    } else {
        for (var index1 = 0; index1 < sizeInput; index1++) {
            var resultsArray = [];
            for (var index2 = 0; index2 < sizeInput; index2++) {
                if (resultsGrid[index1 + index2] !== undefined) { 
                    if (resultsGrid[index1 + index2][sizeInput - 1 - index2] !== undefined) {
                    resultsArray.push(resultsGrid[index1 + index2][sizeInput - 1 - index2]);
                    }
                }
            }
            console.log(resultsArray);
            check3Same(resultsArray);
        } for (var index1 = 0; index1 < sizeInput - 1; index1++) {
            var resultsArray = [];
            for (var index2 = 0; index2 < sizeInput; index2++) {
                if (resultsGrid[index2] !== undefined) { 
                    if (resultsGrid[index2][index1 - index2] !== undefined) {
                    resultsArray.push(resultsGrid[index2][index1 - index2]);
                    }
                }
            }
            console.log(resultsArray);
            check3Same(resultsArray);
        }
    }
} 

var handleResetBtn = function() {
    turnCounter = 0;
    gameEnd = false;
    gameSquares.forEach(function(gameSquare) {
        gameSquare.textContent = '';
    })
    winner.textContent = '';
}

var createGrid = function(num) {
    for (var index1 = 0; index1 < num; index1++) {
        let row = [];
        resultsGrid.push(row);
        for (var index2 = 0; index2 < num; index2++) {
            let string = `${gameSquares[sizeInput * index1 + index2].textContent}`;
            row.push(string);
        }
    }
}

gameSquares.forEach(function(gameSquare) {
    gameSquare.addEventListener('click', handleSquareClick);
});

document.querySelector('.reset-btn').addEventListener('click', handleResetBtn);


