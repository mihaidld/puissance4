# Puissance 4 (Connect Four) in command line on Node.js

A command line program with `Node.js`, `chalk` (for terminal string styling) and `readline-sync` (for interactive conversation with the user via a console).

## Presentation

-   _src/main.js_ : manages game;
-   _src/grid.js_ : builds grid depending on a number of columns and rows (recommended maximum 40 columns and 99 rows for user experience);
-   _src/checkImpossible.js_ : function to check if impossible game (due to number of rows, columns or tokens to align);
-   _src/checkWinner.js_ : functions to check for horizontal, vertical or diagonal win;
-   _src/help.js_ : function for help option;
-   _src/rules.js_ : function to show rules;

## Install dependencies:

```zsh
% yarn install
```

## Play

Using the command line 2 players take turns to place tokens on a grid. By default the grid has 6 rows and 7 columns (but this can be changed in `src/grid.js`):

```zsh
      1   2   3   4   5   6   7
    +---+---+---+---+---+---+---+
  6 |   |   |   |   |   |   |   |
    +---+---+---+---+---+---+---+
  5 |   |   |   |   |   |   |   |
    +---+---+---+---+---+---+---+
  4 |   |   |   |   |   |   |   |
    +---+---+---+---+---+---+---+
  3 |   |   |   |   |   |   |   |
    +---+---+---+---+---+---+---+
  2 |   |   | O |   |   |   |   |
    +---+---+---+---+---+---+---+
  1 |   |   | X |   |   |   |   |
    +---+---+---+---+---+---+---+
      1   2   3   4   5   6   7

  Mihai> put(1)
```

#### Launch

```zsh
node src/main.js
```

Program asks for the names of the two players and attributes to the first a red token `O` and to the second a yellow token `X`.  
The game can begin.  
Below the grid a prompt invites current player to enter one of the folloing commands :

`Mihai> put(1)`=> Place a token of player Mihai in column 1.  
`Mihai> rules` => Show game rules.  
`Mihai> help` => Show all available commands.  
`Mihai> whoami` => Show token of current player.  
`Mihai> abandon` => Player abandons and the other player is declared winner.

The game ends whenever a player wins by making a horizontal, vertical or diagonal line of 4 tokens (by default but this can be changed in `src/grid.js`) or in case of a draw when all tokens are placed without a winner.
