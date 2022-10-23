# Tic-tac-toe
*Developed in JavaScript classes in the OneBitCode full-stack developer course.* 

This exercise explored Vanilla JavaScript methods to select and manipulate certain groups of HTML elements to simulate a tic-tac-toe board, allowing the players to combine a set of three icons (❌⭕) to result in one player's victory or a tie. 

To see the result [click here](https://huannvictor.github.io/oneBitCode-TicTacToe/) to go to the deployed page or feel free to clone this repo.

# The logic designed to accomplish this was:

# Techs
- HTML5
- CSS3
- JavaScript
- Phosphor Library Icon

## The HTML file:
 - Input elements to get the players' names
 - Div elements to create the board
 - A button to start the game
 - The same button to restart the game 

## The CSS file:
- Specified colors variables
- Keeping the style on a CSS file, not on the in-line stylization
- Stipulating classes to operate with the game logic, such as changing the colors of the winner's board's squares to green (respecting if it's a light or dark square)

## The JS file:
#### Preparing the board to play: 
- Set the two players' names by getting the inputs' value and placing a "p" element in their place
- Release the board to be clicked
#### The logic of the game:
- For each square clicked, include an icon (an ❌ or an ⭕, for each turn)
- Check if it has a combination of three equal icons (horizontally, vertically, or diagonally)
- Flags the player on each turn
- Flags the winning player and disable clicking
#### Restart the board:
- Clean the players' names and replace the inputs
- Clean the board and reenable clicking

# Layout

<div align="center">

![first layout: no player set](assets/Desktop%20-%201.png)
![second layout: the players settled and flagged the first of the turn](assets/Desktop%20-%202.png)
![third layout: flagged the second of the turn](assets/Desktop%20-%203.png)
![first layout: shows the winner set of three and flag the winner player](assets/Desktop%20-%204.png)

</div>