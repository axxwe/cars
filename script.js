var canvasHeight = 480;
var canvasWidth = 70;
var car;
var crashed = false;
var score = 0;
var speed = 1;
var relativeSpeed =  5;
var opponents = [];


// Middle line controller
var numberOfLines = 0;
var lineHeight = 10;
var linePadding = 20;
var lineStroke = 1;
var lineColor = 0;

var startLineX;
var startLineY;

var endLineX;
var endLineY;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background('#f2f2f2');
    car = new Car(true);
    opponents[0] = new Car(false);



}

function draw() {
    background(51);
    car.show();
    showMiddleLines();

    for(var i = 0; i < middleLineArray.length; i++) {
        middleLineArray[i]['y1'] += 1;
        middleLineArray[i]['y2'] += 1;
    }

    numberOfLines = middleLinesNumber();

    opponents[0].show();
    crashed = car.checkedIfCrashed(car.x, car.y, opponents[0].x, opponents[0].y);
    if(!crashed) {
        opponents[0].applyForce( relativeSpeed * speed);
    }
    else {
        console.log('Game Over');
        noLoop();
    }

}

function  keyPressed() {
    if(!crashed) {
        if (keyCode === LEFT_ARROW) {
            car.changePosition('left');
        }
        if (keyCode === RIGHT_ARROW) {
            car.changePosition('right');
        }
        if (key === ' ') {
            speed = 3;
        }
    }
}

function keyReleased() {
    if( key === ' ' ) {
        speed = 1;
    }
}

function updateScore(score) {
    document.getElementById('score').innerHTML = 'Your score is: '+ score;
    var vel = score / 2;
    if( vel < 5 )
        vel = 5;

    relativeSpeed = Math.floor(vel);
}


