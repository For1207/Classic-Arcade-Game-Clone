// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// add class Hero
class Hero {
  constructor() {
    this.x = 202; // defines hero's  x initial position on the board
    this.y = 415; // defines hero's  y initial position on the board
    this.sprite = 'images/char-boy.png';
  }

  // add the hero to an initial position
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

// Updat hero's x/y coordidates accordingly to pressed key and width/height of game board blocks
  handleInput(position) {
    switch(position) {
      case 'left':
        if (this.x > 0) { // this and follow conditions keep the hero inside the gaming board
          this.x -= 101;
        }
        break;
      case 'up':
        if (this.y > 0) {
          this.y -= 83;
        }
        break;
      case 'right':
        if (this.x < 404) {
        this.x += 101;
        }
        break;
      case 'down':
        if (this.y < 404) {
        this.y += 83;
        }
        break;
    }

  }
}

const player = new Hero();
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
