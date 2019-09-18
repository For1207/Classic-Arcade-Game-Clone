// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y + 62;
  this.sprite = 'images/enemy-bug.png';
  this.block = 101;
  this.speed = speed;
};

// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  if(this.x < this.block * 5) { // condition to let enemies move away from the board
    this.x += this.speed * dt;
  }
  else { // return enemis to the start
    this.x = -this.block;
  }
};

// Draw the enemy on the screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Add class Hero
class Hero {
  constructor() {
    this.x = 202; // defines hero's  x initial position on the board
    this.y = 404; // defines hero's  y initial position on the board
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

const player = new Hero(); //instatiate the Hero object
const enemy1 = new Enemy(-152, 0, 100);//instatiate the Enemy objects
const enemy2 = new Enemy(-352, 0, 300);
const enemy3 = new Enemy(-352, 83, 150);
const enemy4 = new Enemy(-452, 83, 400);
const enemy5 = new Enemy(-352, 166, 200);
const enemy6 = new Enemy(-652, 166, 500);
const allEnemies = [enemy1, enemy2, enemy3, enemy4,  enemy5, enemy6];

// This listens for key presses and sends the keys to
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
