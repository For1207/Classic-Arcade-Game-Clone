# Classic Arcade Game Clone Project

The goal of this project is to develop a simple arcade game using JavaScript object-oriented programming features.

This game meets criteria described in:
* ["Classic Arcade Game Clone Project Specification"](https://review.udacity.com/#!/rubrics/15/view);
* [Udacity Front End Nanodegree JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)

[Visual assets and a game loop engine](https://github.com/udacity/frontend-nanodegree-arcade-game) code was provided.

## Implementation
We need to add some code to the starter code and write new by following provided comments. Steps bellow describe this process:

    * Developing "Hero";
    * Developing "Enemies";
    * Developing Collisions and Win Conditions;
    * Game Reset;

### Developing "Hero"

In file app.js:

`class Hero ` consist of a constructor function and methods:

`constructor()` defines hero's initial position on the board, an image we use to render the hero and a boolean operator which will be used later as a part of resetting process;

`update()` method contains:
 * the collision condition between the hero and enemies.
 * win condition if the hero reaches water
 * resets hero position to an initial if any of them has occurred;

`reset()` fucntion just contains hero's initial coordinates on the board;

`render()` method renders the hero at an initial position;

`handleInput()`:
* updates hero's x/y coordidates accordingly to pressed key and width/height of game board blocks;
* `if` conditions in lines 70, 75, 80, 85 keeps the hero inside the game board;

Line 92 `const player = new Hero();` instantiates the Hero object;

### Developing "Emenies"

In `var Enemy = function(x, y, speed)`:
 * `this.x = x; this.y = y;` - set a placeholder for an enemy's initial position;
 * `this.speed` - used to set an enemy's speed;

 Then in lines 97 - 103 we set up enemy 6 enemy objects and create an `allEmenies` array.

 `Enemy.prototype.update = function(dt)`:
 * contains a condition which allows the enemies move away from the board;
 * then returns enemis to the start;
 * randomises initial enemies' position by x/y axis;

 `Enemy.prototype.render = function()` - draws the enemies on the screen;

### Developing Collisions and Win Conditions
In lines 42 - 43 we loop through `allEmeniesnemis` array and compare their current y-coordinates with hero's current position. If they match we consider it as a collision and reset hero's position to initial in line 44 by `this.reset();`

In lines 46-52 we check weather the hero reaches water (`this.y < 20`). This is a wining condition. Then we assign `this.youWin = true;`, which was declared in the hero's construction function. Then return the hero to the start.

### Game Reset
File engine.js

In lines 11 and 12 we create two variables `modal` and `playAgain`, we will use them for modal window.

In line 45 we check boolean `youWin`. If it is `true`:
* we stop game animation with `win.cancelAnimationFrame(gameOver);`
* add class `visible` to `<div>` in line 11 in index.html and display pop up window with 'play again' button.

 If not, the game continues with `gameOver = win.requestAnimationFrame(main)` in lines 48-50.

Function `playAgain.addEventListener` in line 14 adds an event listener to "Play Again" button and after pushing it:
* toggle of the modal window;
* change `youWin` to `false`;
* restart animation loop.

## References
1. [MDN web docs](https://developer.mozilla.org/en-US/);
2. [Knowledge section at Udacity.com](https://knowledge.udacity.com/?nanodegree=5ccda402-496f-11e8-b4ff-439352d5243c&page=1&project=982bdd8a-83f2-11e8-9974-9f9e5c0319d8);
3. "Learning Web Design" by Jeniffer Niederst Robbins, O'Reilly, 2018.
