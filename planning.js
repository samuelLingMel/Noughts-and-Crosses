// var gameSquares = document.querySelectorAll('game-square');


// base game
// add event listener to each square
//     on click puts down a O or X in an empty square
//     is the square empty
//     need a turn counter so on odd turns O and even X
//     increment turn counter
//     checks if there is a winner
//     only need to be checked after turn 5 (earliest possible someone can win)
// check winner function 
//     winner is defined by three in a row
//         need 8 checks of each possiblity of 3 in a row
//         check if each condition if it can't be achieved and then add a marker so they dont need to be run them out
//         check first row
//         check second row
//         check third row
//         check first column
//         check second column
//         check third column
//         check diagonal top left to bottom right
//         check diagonal bottom left to top right
//         announce the winner
//     or check if no winner can be had
//         if no one can win then it is a tie

// generate game board using for loops 
resultsGrid = [];

// end product = make 3x3 grid using 3 arrays of 3 in an array

// for loop to add arrays into gameboard 
for (var index1 = 0; index1 < 3; index1++) {
    let row = [];
    gameBoard.push(row);
    for (var index2 = 0; index2 < 3; index2++) {
        let string = "";
        row.push(string);
    }
}
console.log(gameBoard);

document.querySelector('.game-board')

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




// 2 is it possible to have all possible combinations already in a variable
// as the game is played each possibility it would fill out the variables
// as soon as the variable has both an X and O it would add a class which would discount it when counting
// as soon as the variable has all X or O it would gain a class which would say which player won the point
// at the end it would just count the number of class to get the point totals
// problem is figuring out the possible combinations and telling them to the computer and also checking each one as play is progressing possibly
// more calculations but spread out throughout the match possible a lot more at the start

------------------------------------------------------------------------------------------------------------------------------
make a grid which can be changed by input by the user ( can be 3 or 6 now)

// write a function to take the information from the game board and place it into the results grid
// needs to be placing it at the right spots

// tweak the check win function to check the results grid instead of gameboard

// make a next game board button
// will have the function to keep turnCounter reset if game has ended reset call back the function to store the game board in grid and have a blank gameboard ready for next game

// have something to show whose turn it is

// need toggle? to check which game mode 3x3 or 6x6

// a place to put the rules

// start button?

// fix  bugs

// when to check results 3x3 vs 6v6

