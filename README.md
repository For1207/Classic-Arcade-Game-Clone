# Classic Arcade Game Clone Project

The goal of this project is to develop a simple arcade game using JavaScript object-oriented programming features.

This game meets criteria described in:
* ["Classic Arcade Game Clone Project Specification"](https://review.udacity.com/#!/rubrics/15/view);
* [Udacity Front End Nanodegree JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)

[Visual assets and a game loop engine](https://github.com/udacity/frontend-nanodegree-arcade-game) code was provided.

## Implementation
We need to add some code to the starter code and write new by following provided comments. Steps bellow describe this process:

    * Developing "Hero";
    * Additions to the Starter Code;
    * Developing "Enemies";
    * Developing Collisions and Win Conditions;
    * Game Reset;

### Developing "Hero"

In file app.js:

`class Hero ` consist of a constructor function and methods:

`constructor()` defines hero's initial position on the board, an image we use to render the hero and a boolean operator which will be used later as a part of resetting process;

`update()` method contains the collision condition between the hero and enemies. Win condition if the hero reaches water and resets hero position to an initial if any of them has occurred;

`reset()` fucntion just contains hero's initial coordinates on the board;

`render()` method renders the hero at an initial position;

`handleInput()`:
* updates hero's x/y coordidates accordingly to pressed key and width/height of game board blocks;
* `if` conditions in lines 67, 72, 77, 82 keeps the hero inside the game board;

Line 92 `const player = new Hero();` instantiates the Hero object;
