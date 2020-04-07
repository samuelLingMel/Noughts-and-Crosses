
var gameSquares = document.querySelectorAll('.game-square');
var turnCounter = 0;

var handleSquareClick = function(event) {
    
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
        checkWinner()
    }       
}

// add event listener to each square
gameSquares.forEach(function(gameSquare) {
    gameSquare.addEventListener('click', handleSquareClick)
    console.log('job done')
})

// check winner function 
// winner is defined by three in a row
var checkWinner = function() {
    // need 8 checks of each possiblity of 3 in a row
    // check first row
    checkRow(1)
    // check second row
    checkRow(2)
    // check third row
    checkRow(3)
    // check first column
    checkColumn(1)
    // check second column
    checkColumn(2)
    // check third column
    checkColumn(3)
    // check diagonal top left to bottom right
    checkDiagonalStartTopLeft()
    // check diagonal top right to bottom left
    checkDiagonalStartTopRight()
}    

var checkRow = function(num) {
    checkArray = [];
    for (var index = 3 * (num - 1); index < 3 * num; index++) {
        checkArray.push(gameSquares[index].textContent);
    }
    if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
        console.log(checkArray[0] + ' is the winner!';
    }
}

var checkColumn = function(num) {
    checkArray = [];
    for (var index = num - 1; index < 6 + num; index += 3) {
        checkArray.push(gameSquares[index].textContent);
    }
    if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
        console.log(checkArray[0] + ' is the winner!';
    }
}

var checkDiagonalStartTopLeft = function() {
    checkArray = [];
    for (var index = 0; index < 9; index += 4) {
        checkArray.push(gameSquares[index].textContent);
    }
    if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
        console.log(checkArray[0] + ' is the winner!';
    }
}

var checkDiagonalStartTopRight = function() {
    checkArray = [];
    for (var index = 2; index < 7; index += 2) {
        checkArray.push(gameSquares[index].textContent);
    }
    if (checkArray[0] === checkArray[1] && checkArray[1]=== checkArray[2]) {
        console.log(checkArray[0] + ' is the winner!';
    }
}
// check if each condition if it can't be achieved and then add a marker so they dont need to be run them out


// make everything scalable to a 6x6 or 9x9 grid but it is still 3 in a row to win and see who has the highest score
// my options for scalability
// 1 use for or forEach loops to go through each grid and search for 3 Xs or Os in a row
// how many loops would it take on a 6x6 grid.....
// (rows(4x6) + columns(4x6) + diagonal down right(1+2+3+4+3+2+1) + diagonal top right (1+2+3+4+3+2+1))
// 24 + 24 + 15 + 15
// 78
// lower level code ideas
// each square has a O or X in it
// get an array for each testable row
// loop through the array comparing 3 in a row at a time incrementing 1
// problem is having to get the arrays can it be done using for loops?



// 
// 2 is it possible to have all possible combinations already in a variable
// as the game is played each possibility it would fill out the variables
// as soon as the variable has both an X and O it would add a class which would discount it when counting
// as soon as the variable has all X or O it would gain a class which would say which player won the point
// at the end it would just count the number of class to get the point totals
// problem is figuring out the possible combinations and telling them to the computer and also checking each one as play is progressing possibly
// more calculations but spread out throughout the match possible a lot more at the start






