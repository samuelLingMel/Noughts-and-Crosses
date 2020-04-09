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
for (var index1 = 0; index1 < 6; index1++) {
    let row = [];
    resultsGrid.push(row);
    for (var index2 = 0; index2 < 6; index2++) {
        let string = `${index2}, ${index1}`;
        row.push(string);
    }
}
console.log(resultsGrid);

0: (6) ["0, 0", "1, 0", "2, 0", "3, 0", "4, 0", "5, 0"]
1: (6) ["0, 1", "1, 1", "2, 1", "3, 1", "4, 1", "5, 1"]
2: (6) ["0, 2", "1, 2", "2, 2", "3, 2", "4, 2", "5, 2"]
3: (6) ["0, 3", "1, 3", "2, 3", "3, 3", "4, 3", "5, 3"]
4: (6) ["0, 4", "1, 4", "2, 4", "3, 4", "4, 4", "5, 4"]
5: (6) ["0, 5", "1, 5", "2, 5", "3, 5", "4, 5", "5, 5"]

00 01 02  09 10 11  18 19 20 
03 04 05  12 13 14  21 22 23
06 07 08  15 16 17  24 25 26

27 28 29  36 37 38  45 46 47
30 31 32  39 40 41  48 49 50
33 34 35  42 43 44  51 52 53

54 55 56  63 64 65  72 73 74
57 58 59  66 67 68  75 76 77
60 61 62  69 70 71  78 79 80

00 01 02  09 10 11
03 04 05  12 13 14 
06 07 08  15 16 17

18 19 20  27 28 29
21 22 23  30 31 32
24 25 26  33 34 35

00 01 02
03 04 05
06 07 08

// var createGrid = function(num) {
//     for (var index1 = 0; index1 < num; index1++) {
//         let row = [];
//         for (var index2 = 0; index2 < num; index2++) {
//             let string = `${gameSquares[sizeInput * index1 + index2].textContent}`;
//             row.push(string);
//         }
//         resultsGrid.push(row);
//     }
// }

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

// ------------------------------------------------------------------------------------------------------------------------------
make a grid which can be changed by input by the user ( can be 3 or 6 now)

write a function to take the information from the game board and place it into the results grid
needs to be placing it at the right spots

tweak the check win function to check the results grid instead of gameboard


add heading

add new game + toggle 
need toggle? to check which game mode 3x3 or 6x6
add functionality to toggle


have something to show whose turn it is

// description of game
something like:
This is Noughts and Crosses Plus.  Where it is different is that after 4 games of normal Noughts and Crosses then is compiles the boards from all four games and you get points for each 3 in a row amongst the new board. Now there is more strategy so don't give up if you lose a board just keep on filling it up. Try and beat the other persons score. Good luck.
Slide Show?

start button?
features 
- makes board unhidden toggle('hidden') if statement for different board states
// - shows reset button for 3x3
- shows whose turn it is (textContent = It is Xs turn) 
// - set sizeInput = 3 or 6
// - change colours for 6x6 entails, body color white, body background color black, game-board border white
// - hide toggle
// -change title to Noughts and Crosses + add font-family

end button must mirror start button but you know, the opposite to reset

when to check results 3x3 vs 6v6

// will have the function to keep turnCounter reset if game has ended reset call back the function to store the game board in grid and have a blank gameboard ready for next game

// make a next game board button
// appear only in 6x6


// a place to put the rules
// bottom of the page after 6x6 mode is chosen?

//scores for 6x6 

// fix  bugs


document.querySelectorAll('.gb').forEach(function(partOfGameBoard) {
    partOfGameBoard.classList.toggle('hidden');
})

colour pallette
#e7e4de | #c3e1e5 | #aad0d4 | #68b8c1 |  #2a8a92 |  #f77532