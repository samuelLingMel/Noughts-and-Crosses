
var gameSquares = document.querySelectorAll('.game-square');
var winner = document.querySelector('.winner');
var turnCounter = 0;
var gameEnd = true;
var sizeInput = 3;
var xScore = 0;
var oScore = 0;
var resultsGrid = [];
var nextCounter = 0;

var checkGameEnded = function() {
    if (turnCounter === sizeInput ** 2) { 
        return true;
    } else if (winner.textContent !== "") {
        return true;
    } else if (gameEnd === true) {
        return true;
    } else {
        return false;
    }
}

var resizeBoard = function() {
    gameSquares.forEach(function(partOfGameBoard) {
        partOfGameBoard.classList.toggle('resize-border');
    })
    document.querySelectorAll('.gb').forEach(function(partOfGameBoard) {
        partOfGameBoard.classList.toggle('shrinkTo225');
    })
    document.querySelector('.game-board').classList.toggle('shrinkTo450');
}

var diffStyle = function() {
    document.querySelector('h2').classList.toggle('fancy');
    document.body.classList.toggle('invert-body');
    gameSquares.forEach(function(partOfGameBoard) {
        partOfGameBoard.classList.toggle('invert-border');
    })
    document.querySelector('.winner').classList.toggle('win');
    resizeBoard();
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
        
        if (checkGameEnded()) {
            document.querySelector('.reset-btn').classList.toggle('hidden');
            document.querySelector('.end-btn').classList.toggle('hidden');
            if (winner.textContent === '') {
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
    if ((arr.length) > 2) {
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
                document.querySelector('.whose-turn').textContent = '';

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
                document.querySelector('.whose-turn').textContent = '';
            }
        }
    } else {
        for (var index1 = 0; index1 < sizeInput; index1++) {
            var resultsArray = [];
            for (var index2 = 0; index2 < sizeInput; index2++) {
                resultsArray.push(resultsGrid[index2][index1]);
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
                document.querySelector('.whose-turn').textContent = '';
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
                document.querySelector('.whose-turn').textContent = '';
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
            check3Same(resultsArray);
        }
    }
} 

var createGrid = function(num) {
    for (var index0 = 0; index0 < num / 3; index0++) {
        for (var index1 = 0; index1 < 3 * 3; index1 += 3) {
            var horizontal = []; 
            for (var index2 = 0; index2 < num / 3; index2++) {
                for (var index3 = 0; index3 < 3; index3++) {
                    let string = `${gameSquares[index0 * 18 + index2 * 9 + index1 + index3].textContent}`
                    horizontal.push(string);
                }
            }
            resultsGrid.push(horizontal);
        }
    }
}

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
                
                if (turnCounter === sizeInput ** 2) { 
                    document.querySelector('.whose-turn').textContent = "";
                } else {
                    document.querySelector('.whose-turn').textContent = "It is Os turn now.";
                }
            } else {
                event.target.textContent = 'O';
                
                // increment turn counter
                turnCounter++;

                if (turnCounter === sizeInput ** 2) { 
                    document.querySelector('.whose-turn').textContent = "";
                } else {
                    document.querySelector('.whose-turn').textContent = "It is Xs turn now.";
                }
            }  
        }
        if (sizeInput === 3) {
            // only need to be checked after turn 5 (earliest possible someone can win)
            if (turnCounter > 4) {
                // checks if there is a winner
                checkWinner();
            }
        } else {
            if (turnCounter === 9 || turnCounter === 18 || turnCounter === 27) {
                document.querySelector('.next-btn').classList.remove('hidden');
                document.querySelector('.whose-turn').textContent = '';
                nextCounter++;
            } 
        }
    }       
}

var handleGMToggle = function(event) {
    if (sizeInput === 3) {
        sizeInput = 6;
    } else {
        sizeInput = 3;
    }
}

var handleStartBtn = function(event) {
    if (sizeInput === 3) {
        document.querySelector('.game-board-one').classList.remove('hidden');
        document.querySelector('.whose-turn').textContent = 'It is Xs turn now.';
        document.querySelector('.game-mode').classList.add('hidden');
        document.querySelector('.game-mode-text').classList.add('hidden');
        document.querySelector('.start-btn').classList.add('hidden');
        gameEnd = false;
        document.querySelector('h2').textContent = 'Noughts and Crosses'
    } else if (sizeInput === 6) {
        document.querySelectorAll('.gb').forEach(function(partOfGameBoard) {
            partOfGameBoard.classList.remove('hidden');
        })
        document.querySelector('.game-mode').classList.add('hidden');
        document.querySelector('.game-mode-text').classList.add('hidden');
        document.querySelector('.start-btn').classList.add('hidden');
        document.querySelector('.next-btn').classList.remove('hidden');
        document.querySelector('.skip-btn').classList.remove('hidden');
        diffStyle();
        document.querySelector('h2').textContent = 'Noughts and Crosses +'
        document.querySelector('.tute').textContent = 'Hold on, before you play you need to learn the new rules. Press the skip button if you already know.';
    } 
}

var handleNextBtn = function(event) {
    if (nextCounter === 0) {
        for (var index = 1; index < 4; index++) {
            document.querySelectorAll('.gb')[index].classList.add('hidden')
        }
        document.querySelector('.tute').textContent = 'Noughts and Crosses Plus starts the same as a normal game.';
        nextCounter++;
    } else if (nextCounter === 1) {
        gameSquares[0].textContent = 'X';
        gameSquares[1].textContent = 'X';
        gameSquares[2].textContent = 'X';
        gameSquares[3].textContent = 'O';
        gameSquares[4].textContent = 'O';
        document.querySelector('.tute').textContent = 'Except when someone "wins" you just keep playing to fill up the board.';
        nextCounter++;
    } else if (nextCounter === 2) {
        gameSquares[5].textContent = 'X';
        gameSquares[6].textContent = 'X';
        gameSquares[7].textContent = 'O';
        gameSquares[8].textContent = 'O';
        document.querySelector('.tute').textContent = 'Now that the board is full you will do that again but with 3 other boards.';
        nextCounter++;
    } else if (nextCounter === 3) {
        for (var index = 0; index < 36; index += 2) {
            gameSquares[index].textContent = 'X';
        }
        for (var index = 1; index < 36; index += 2) {
            gameSquares[index].textContent = 'O';
        }
        for (var index = 0; index < 4; index++) {
            document.querySelectorAll('.gb')[index].classList.remove('hidden')
        }
        document.querySelector('.tute').textContent = 'Here is how that would look.';
        nextCounter++;
    } else if (nextCounter === 4) {
        document.querySelector('.score-btn').classList.remove('hidden');
        document.querySelector('.tute').textContent = 'Now the game has ended and you tally up the score for each time you got three in a row in this new grid.';
        nextCounter++;
    } else if (nextCounter === 5) {
        document.querySelector('.tute').textContent = 'A tie how rare... well now you know the rules so better luck next game.';
        nextCounter++;
    } else if (nextCounter === 6) {
        handleResetBtn();
        document.querySelector('.tute').textContent = 'Try to remember the order, 1st board is top-left, 2nd is top-right, 3rd is bottom-left and 4th is bottom-right.';
        nextCounter = 10;
    } else if (nextCounter === 10) {
        document.querySelector('.tute').textContent = '';
        gameEnd = false;
        for (var index = 1; index < 4; index++) {
            document.querySelectorAll('.gb')[index].classList.add('hidden');
        }
        document.querySelectorAll('.gb')[0].classList.remove('hidden');
        document.querySelector('.score-btn').classList.add('hidden');
        document.querySelector('.next-btn').classList.add('hidden');
        document.querySelector('.skip-btn').classList.add('hidden');
        document.querySelector('.tute').textContent = '1st Board';
        resizeBoard();
    } else if (nextCounter === 11) {
        // reminder to me to scale this later
        document.querySelector('.whose-turn').textContent = 'It is Os turn now.';
        document.querySelectorAll('.gb')[0].classList.add('hidden');
        document.querySelectorAll('.gb')[1].classList.remove('hidden');
        document.querySelector('.tute').textContent = '2nd Board';
        document.querySelector('.next-btn').classList.add('hidden')
    } else if (nextCounter === 12) {
        // reminder to me to scale this later
        document.querySelector('.whose-turn').textContent = 'It is Xs turn now.';
        document.querySelectorAll('.gb')[1].classList.add('hidden');
        document.querySelectorAll('.gb')[2].classList.remove('hidden');
        document.querySelector('.tute').textContent = '3rd Board';
        document.querySelector('.next-btn').classList.add('hidden')
    } else if (nextCounter === 13) {
        // reminder to me to scale this later
        document.querySelector('.whose-turn').textContent = 'It is Os turn now.';
        document.querySelectorAll('.gb')[2].classList.add('hidden');
        document.querySelectorAll('.gb')[3].classList.remove('hidden');
        document.querySelector('.tute').textContent = '4th Board';
        nextCounter++;
    } else if (nextCounter === 14) {
        // reminder to me to scale this later
        resizeBoard();
        for (var index = 0; index < 3; index++) {
            document.querySelectorAll('.gb')[index].classList.remove('hidden');
        }
        document.querySelector('.tute').textContent = '';
        document.querySelector('.next-btn').classList.add('hidden');
        document.querySelector('.score-btn').classList.remove('hidden');
        document.querySelector('.reset-btn').classList.remove('hidden');
    }
}

var handleSkipBtn = function(event) {
    nextCounter = 10;
    handleNextBtn(); 
}

var handleResetBtn = function() {
    turnCounter = 0;
    gameEnd = false;
    gameSquares.forEach(function(gameSquare) {
        gameSquare.textContent = '';
    })
    winner.textContent = '';
    resultsGrid = [];
    document.querySelector('.whose-turn').textContent = 'It is Xs turn now.';
    document.querySelector('.reset-btn').classList.add('hidden');
    document.querySelector('.end-btn').classList.add('hidden');
    document.querySelector('.tute').textContent = '';
    document.querySelector('.score-btn').disabled = false;
    document.querySelector('.oScore').textContent = "";
    document.querySelector('.xScore').textContent = "";
    if (sizeInput === 6 && gameEnd === true)  {
        document.querySelector('.oScore').textContent = ``;
        document.querySelector('.xScore').textContent = ``;
        document.querySelector('.score-btn').classList.add('hidden');
        nextCounter = 10;
        handleNextBtn();
    }
}

var handleEndBtn = function() {
    handleResetBtn();
    gameEnd = true;
    if (sizeInput === 3) {
        document.querySelector('.game-board-one').classList.toggle('hidden');
        document.querySelector('.whose-turn').textContent = '';
        document.querySelector('.game-mode').classList.toggle('hidden');
        document.querySelector('.game-mode-text').classList.toggle('hidden');
        document.querySelector('.start-btn').classList.toggle('hidden');
        document.querySelector('.game-board-one').classList.remove('shrinkTo225');
        document.querySelector('.game-board').classList.remove('shrinkTo450');
    } else {
        diffStyle();
        nextCounter = 0;
        for (var index = 0; index < 4; index++) {
            document.querySelectorAll('.gb')[index].classList.add('hidden');
        }
        document.querySelector('.score-btn').classList.add('hidden');
        document.querySelector('.game-mode').classList.remove('hidden');
        document.querySelector('.game-mode-text').classList.remove('hidden');
        document.querySelector('.start-btn').classList.remove('hidden');
        document.querySelector('h2').textContent = 'Noughts and Crosses';
        document.querySelector('.whose-turn').textContent = '';
    }
}

var handleScoreBtn = function() {
    checkWinner(sizeInput);
    document.querySelector('.oScore').textContent = `O = ${oScore}`;
    document.querySelector('.xScore').textContent = `X = ${xScore}`;
    
    if (oScore > xScore) {
        document.querySelector('.winner').textContent = 'Winner is O!'
    } else if (xScore > oScore) {
        document.querySelector('.winner').textContent = 'Winner is X!'
    } else {
        document.querySelector('.winner').textContent = 'It is a tie......'
    }
    document.querySelector('.score-btn').disabled = true;
    document.querySelector('.end-btn').classList.remove('hidden');
}

document.querySelector('.game-mode').addEventListener('click', handleGMToggle);
document.querySelector('.start-btn').addEventListener('click', handleStartBtn);
document.querySelector('.next-btn').addEventListener('click', handleNextBtn);
document.querySelector('.skip-btn').addEventListener('click', handleSkipBtn);
document.querySelector('.reset-btn').addEventListener('click', handleResetBtn);
document.querySelector('.end-btn').addEventListener('click', handleEndBtn);
document.querySelector('.score-btn').addEventListener('click', handleScoreBtn);

gameSquares.forEach(function(gameSquare) { 
    gameSquare.addEventListener('click', handleSquareClick);
});
